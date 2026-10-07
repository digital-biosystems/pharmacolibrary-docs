<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;lorlatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lorlatinib_Hibma2022_reference&quot;,&quot;label&quot;:&quot;Hibma_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# lorlatinib

- **generic name:** lorlatinib
- **ATC codes:** `L01ED05`
- **DrugBank:** [DB12130](https://go.drugbank.com/drugs/DB12130) · **PubChem:** [CID 71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823)
- **molar mass:** 406.421 g/mol (C21H19FN6O2) — DrugBank
- **groups:** approved, investigational

## About

Lorlatinib is an ALK inhibitor used to treat non-small-cell lung carcinoma. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27285820](https://www.wikidata.org/wiki/Q27285820) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lorlatinib | parent | 406.421 | C21H19FN6O2 | DrugBank | [71731823](https://pubchem.ncbi.nlm.nih.gov/compound/71731823) | Chen_2021, Damoiseaux_2022_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 02:51 | 4:50 | 2/1/0 | 0/0/1 | 0/0/0 | 112,164/24,126 | openai / gpt-6-luna | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chen_2021_reference](drugs/drug_lorlatinib/Lorlatinib_Chen2021_reference.md) | held back | 1-compartment, oral | 7 (+2 cov.) | Chen J et al., Population pharmacokinetic model with t…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12585](https://doi.org/10.1002/psp4.12585) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Hibma_2022_reference](drugs/drug_lorlatinib/Lorlatinib_Hibma2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Hibma JE et al., Evaluation of the absolute oral bioavai…, Cancer chemotherapy and pha… (2022) | [10.1007/s00280-021-04368-1](https://doi.org/10.1007/s00280-021-04368-1) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Damoiseaux_2022_2_reference](drugs/drug_lorlatinib/Lorlatinib_Damoiseaux2022v2_reference.md) | — | 1-compartment (no model) | 1 | Damoiseaux D et al., Predictiveness of the Human-CYP3A4-Tran…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15070860](https://doi.org/10.3390/ph15070860) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_2_Hypercholesterolemia_grade_3](drugs/drug_lorlatinib/pd_Chen_2021_2_Hypercholesterolemia_grade_3.md) | Hypercholesterolemia grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chen_2021_2_TEAE](drugs/drug_lorlatinib/pd_Chen_2021_2_TEAE.md) | TEAE grade ≥ 3 ← lorlatinib · categorical (graded) response model | — | Chen J et al., Lorlatinib Exposure-Response Analyses f…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2228](https://doi.org/10.1002/cpt.2228) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lorlatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inducer, `CYP2C19` substrate, `CYP2C8` substrate, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `UGT1A3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALK (inhibitor), FER (unknown), FES (inhibitor), NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor), PTK2 (inhibitor), PTK2B (inhibitor), ROS1 (inhibitor), STYK1 (inhibitor), TNK2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Damoiseaux_2022.pdf` | Damoiseaux D et al., Population Pharmacokinetic Modelling to…, Journal of pharmaceutical s… (2022) | popPK | 9 | [10.1016/j.xphs.2021.09.029](https://doi.org/10.1016/j.xphs.2021.09.029) | [34563535](https://pubmed.ncbi.nlm.nih.gov/34563535) | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |

<sub>queue written 2026-10-07T02:46:58.527003+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2021_2 | irrelevant | 2 | 1 | This is a human exposure-response analysis that cites a prior population-PK model but provides no numeric lorlatinib disposition parameters. |
| popPK | Damoiseaux_2022 | relevant | 9 | 0 | The mouse population-PK model is relevant, but no numeric parameter values are present in the provided evidence. |
| popPK | Sun_2022 | relevant | 6 | 1 | Human lorlatinib concentrations and a population-PK-derived average are reported, but numeric disposition parameters are not provided. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The evidence does not identify lorlatinib or provide numeric lorlatinib disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 02:47 UTC</sub>
