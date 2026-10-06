<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01C&quot;,&quot;href&quot;:&quot;atc/L01C.md&quot;},{&quot;label&quot;:&quot;vinflunine&quot;}]"></div>

# vinflunine

- **generic name:** vinflunine
- **ATC codes:** `L01CA05`
- **DrugBank:** [DB11641](https://go.drugbank.com/drugs/DB11641) · **PubChem:** not captured
- **molar mass:** 816.944 g/mol (C45H54F2N4O8) — DrugBank
- **groups:** approved, investigational

## About

Vinflunine is a vinca alkaloid anticancer drug used to treat transitional cell carcinoma of the urinary tract. It is authorised in the European Union, but its use is limited to this indication and it is not widely used elsewhere.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2195393](https://www.wikidata.org/wiki/Q2195393) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:14 | 2:52 | 0/0/0 | 2/2/0 | 0/0/0 | 30,160/10,080 | openai / gpt-6-luna | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Erjala_2005_F](drugs/drug_vinflunine/pd_Erjala_2005_F.md) | survival ← vinflunine · inhibition effect | — | Erjala K et al., Head and neck carcinoma cell lines are…, Anticancer research (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Ngan_2001_inhibition_of_HeLa_cell_proliferation](drugs/drug_vinflunine/pd_Ngan_2001_inhibition_of_HeLa_cell_proliferation.md) | inhibition of HeLa cell proliferation ← vinflunine · inhibition effect | — | Ngan VK et al., Mechanism of mitotic block and inhibiti…, Molecular pharmacology (2001) | [10.1124/mol.60.1.225](https://doi.org/10.1124/mol.60.1.225) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Schmitt_2018_toxicities](drugs/drug_vinflunine/pd_Schmitt_2018_toxicities.md) | toxicities ← vinflunine · categorical (graded) response model | — | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Friberg_2002_leukocytes](drugs/drug_vinflunine/pd_Friberg_2002_leukocytes.md) | leukocytes ← vinflunine · indirect response — drug inhibits the production of leukocytes | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Friberg_2002_neutrophils](drugs/drug_vinflunine/pd_Friberg_2002_neutrophils.md) | neutrophils ← vinflunine · indirect response — drug inhibits the production of neutrophils | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Schmitt_2018_ANC](drugs/drug_vinflunine/pd_Schmitt_2018_ANC.md) | absolute neutrophil counts ← vinflunine · model not identified | — | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vinflunine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABCB5 (substrate), TUBB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Schmitt_2018.pdf` | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | popPK | 10 | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) | [29341179](https://pubmed.ncbi.nlm.nih.gov/29341179) | Human population-PK modeling is reported, but numeric disposition parameter estimates are not provided. |
| `Chan_2014.pdf` | Chan S et al., A phase I clinical and pharmacokinetic…, Cancer chemotherapy and pha… (2014) | popPK | 9 | [10.1007/s00280-014-2420-1](https://doi.org/10.1007/s00280-014-2420-1) | [24627219](https://pubmed.ncbi.nlm.nih.gov/24627219) | Population PK was performed for vinflunine, but no numeric disposition parameter values are provided. |
| `Delord_2013.pdf` | Delord JP et al., Phase I and pharmacokinetic study of IV…, Investigational new drugs (2013) | pgx | 7 | [10.1007/s10637-012-9878-7](https://doi.org/10.1007/s10637-012-9878-7) | [22996801](https://www.ncbi.nlm.nih.gov/pubmed/22996801) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06T15:11:54.749764+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aggarwal_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell lines and does not report pharmacokinetic parameters for vinflunine. |
| PGx | Bamias_2021 | not_relevant | 0 | 0 | The study reports survival associations with ERCC1 genotype, not an effect on a vinflunine pharmacokinetic or pharmacodynamic parameter. |
| popPK | Bonfil_2002 | irrelevant | 0 | 0 | The paper is an in-vivo efficacy and toxicity study in mice that reports tumor incidence and survival data, but does not provide quantitative pharmacokinetic parameters (CL, V, t1/2) for vinflunine. |
| popPK | Chan_2014 | relevant | 9 | 0 | Population PK was performed for vinflunine, but no numeric disposition parameter values are provided. |
| PGx | Delord_2013 | not_relevant | 0 | 0 | The paper evaluates liver dysfunction, not a gene variant, genotype, or phenotype effect on vinflunine PK or PD. |
| popPK | Erjala_2005 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay reporting IC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Estève_2006 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on drug resistance and does not report pharmacokinetic parameters. |
| popPK | Friberg_2002 | irrelevant | 1 | 0 | This is a myelosuppression pharmacodynamic model and provides no numeric vinflunine disposition parameters. |
| popPK | Kerioui_2022 | irrelevant | 0 | 0 | The paper analyzes tumor lesion dynamics and survival, not vinflunine pharmacokinetics. |
| PD | Kerioui_2022 | not_relevant | 0 | 0 | The paper analyzes tumor dynamics and survival for atezolizumab and chemotherapy, but does not report any pharmacodynamic or exposure-response relationship for vinflunine. |
| popPK | Kruczynski_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on tubulin binding and cytotoxicity, containing no pharmacokinetic parameters. |
| popPK | Matsubara_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy study comparing erdafitinib to chemotherapy (including vinflunine) and does not report any pharmacokinetic parameters for vinflunine. |
| PD | Matsubara_2025 | not_relevant | 0 | 0 | The paper is a clinical efficacy and safety analysis of erdafitinib versus chemotherapy (including vinflunine) and does not report any pharmacokinetic or pharmacodynamic modeling or numeric PD parameters for vinflunine. |
| PGx | Ng_2011 | not_relevant | 0 | 0 | The review notes CYP3A4 metabolism but does not report a gene variant, genotype, or phenotype effect on vinflunine PK or PD. |
| popPK | Ngan_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study focusing on microtubule dynamics and cell proliferation, reporting no pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Pourroy_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on apoptosis in neuroblastoma cells and does not report any pharmacokinetic parameters for vinflunine. |
| popPK | Schmitt_2018 | relevant | 10 | 2 | Human population-PK modeling is reported, but numeric disposition parameter estimates are not provided. |
| PGx | Zhao_2007 | not_relevant | 0 | 0 | The study examines CYP3A4-mediated metabolism and inhibitor effects in vitro, not effects of a gene variant, genotype, or phenotype on a vinflunine PK/PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
