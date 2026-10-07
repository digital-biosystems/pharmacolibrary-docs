<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;tepotinib&quot;}]"></div>

# tepotinib

- **generic name:** tepotinib
- **ATC codes:** `L01EP02`, `L01EX21`
- **DrugBank:** [DB15133](https://go.drugbank.com/drugs/DB15133) · **PubChem:** not captured
- **molar mass:** 492.583 g/mol (C29H28N6O2) — DrugBank
- **groups:** approved, investigational

## About

Tepotinib is a kinase inhibitor used to treat non-small-cell lung cancer. It is authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27088961](https://www.wikidata.org/wiki/Q27088961) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tepotinib | parent | 492.583 | C29H28N6O2 | DrugBank | — | Xiong_2022 |
| MSC2571109A | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:21 | 7:21 | 0/0/1 | 2/0/0 | 0/0/0 | 138,528/34,343 | openai / gpt-6-luna | 4 | 0/4 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q69, Q22 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Xiong_2022_reference](drugs/drug_tepotinib/Tepotinib_Xiong2022_reference.md) | — | parent + metabolite (no model) | 15 (+6 cov.) | Xiong W et al., Population pharmacokinetic analysis of…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04423-5](https://doi.org/10.1007/s00280-022-04423-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_TV](drugs/drug_tepotinib/pd_Xiong_2021_TV.md) | tumor volume ← tepotinib · disease-progression model | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition.md) | phospho-MET inhibition ← tepotinib · indirect response — drug inhibits the production of phospho-MET inhibition | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_2](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_2.md) | phospho-MET inhibition ← tepotinib · indirect response — drug inhibits the production of phospho-MET inhibition | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_3](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_3.md) | phospho-MET inhibition ← tepotinib · direct log-linear effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_4](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_4.md) | phospho-MET inhibition ← tepotinib · direct Emax (saturable) effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Xiong_2021_pMET_inhibition_5](drugs/drug_tepotinib/pd_Xiong_2021_pMET_inhibition_5.md) | phospho-MET inhibition ← tepotinib · direct sigmoid Emax (Hill) effect | — | Xiong W et al., Translational pharmacokinetic-pharmacod…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12602](https://doi.org/10.1002/psp4.12602) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xiong_2022_2_Albumin](drugs/drug_tepotinib/pd_Xiong_2022_2_Albumin.md) | serum albumin ← tepotinib · indirect response — drug inhibits the production of serum albumin | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xiong_2022_2_OR](drugs/drug_tepotinib/pd_Xiong_2022_2_OR.md) | objective response (OR) ← tepotinib · model not identified | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Xiong_2022_2_QTcF](drugs/drug_tepotinib/pd_Xiong_2022_2_QTcF.md) | ΔQTcF interval ← tepotinib · direct linear effect | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Xiong_2022_2_edema](drugs/drug_tepotinib/pd_Xiong_2022_2_edema.md) | first edema event ← tepotinib · time-to-event model | — | Xiong W et al., Exposure-response analyses for the MET…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-022-04441-3](https://doi.org/10.1007/s00280-022-04441-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tepotinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: MET (inhibitor), MTNR1B (inhibitor), NISCH (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Falchook_2020.pdf` | Falchook GS et al., First-in-Man Phase I Trial of the Selec…, Clinical cancer research :… (2020) | popPK | 10 | [10.1158/1078-0432.CCR-19-2860](https://doi.org/10.1158/1078-0432.CCR-19-2860) | [31822497](https://pubmed.ncbi.nlm.nih.gov/31822497) | Human population-PK modeling is mentioned, but no numeric tepotinib disposition parameters are provided. |

<sub>queue written 2026-10-07T08:14:30.679510+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Falchook_2020 | relevant | 10 | 0 | Human population-PK modeling is mentioned, but no numeric tepotinib disposition parameters are provided. |
| popPK | Lu_2024 | irrelevant | 2 | 2 | This review describes tepotinib popPK findings but gives no numeric model parameters, and exposure comparisons are in a figure not provided. |
| popPK | Xiong_2021 | relevant | 9 | 1 | Tepotinib population and compartmental PK models are described, but parameter values are only reported in supplementary Tables S1 and S3, which are not provided. |
| popPK | Xiong_2022_2 | irrelevant | 1 | 0 | The paper reports exposure–response analyses, but tepotinib disposition parameters are only attributed to prior model [14] and are not provided here. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:14 UTC</sub>
