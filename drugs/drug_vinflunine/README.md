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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Erjala_2005_F](drugs/drug_vinflunine/pd_Erjala_2005_F.md) | survival ← vinflunine · inhibition effect | — | Erjala K et al., Head and neck carcinoma cell lines are…, Anticancer research (2005) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Ngan_2001_inhibition_of_HeLa_cell_proliferation](drugs/drug_vinflunine/pd_Ngan_2001_inhibition_of_HeLa_cell_proliferation.md) | inhibition of HeLa cell proliferation ← vinflunine · inhibition effect | — | Ngan VK et al., Mechanism of mitotic block and inhibiti…, Molecular pharmacology (2001) | [10.1124/mol.60.1.225](https://doi.org/10.1124/mol.60.1.225) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Schmitt_2018_toxicities](drugs/drug_vinflunine/pd_Schmitt_2018_toxicities.md) | toxicities ← vinflunine · categorical (graded) response model | — | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Friberg_2002_leukocytes](drugs/drug_vinflunine/pd_Friberg_2002_leukocytes.md) | leukocytes ← vinflunine · indirect response — drug inhibits the production of leukocytes | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Friberg_2002_neutrophils](drugs/drug_vinflunine/pd_Friberg_2002_neutrophils.md) | neutrophils ← vinflunine · indirect response — drug inhibits the production of neutrophils | — | Friberg LE et al., Model of chemotherapy-induced myelosupp…, Journal of clinical oncolog… (2002) | [10.1200/JCO.2002.02.140](https://doi.org/10.1200/JCO.2002.02.140) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:qwen3.8-27b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Schmitt_2018_ANC](drugs/drug_vinflunine/pd_Schmitt_2018_ANC.md) | absolute neutrophil counts ← vinflunine · model not identified | — | Schmitt A et al., Better characterization of vinflunine p…, British journal of clinical… (2018) | [10.1111/bcp.13518](https://doi.org/10.1111/bcp.13518) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=vinflunine).

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
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 25 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
