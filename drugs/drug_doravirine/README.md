<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;doravirine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Doravirine_Thoueille2024_reference&quot;,&quot;label&quot;:&quot;Thoueille_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# doravirine

- **generic name:** doravirine
- **ATC codes:** `J05AG06`, `J05AR24`
- **DrugBank:** [DB12301](https://go.drugbank.com/drugs/DB12301) · **PubChem:** [CID 58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047)
- **molar mass:** 425.749 g/mol (C17H11ClF3N5O3) — DrugBank
- **groups:** approved, investigational

## About

Doravirine is an antiviral medicine used to treat HIV infections, acting as a non-nucleoside reverse transcriptase inhibitor. It is authorised in the European Union and is used in combination antiviral treatment for HIV.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6885419](https://www.wikidata.org/wiki/Q6885419) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| doravirine | parent | 425.749 | C17H11ClF3N5O3 | DrugBank | [58460047](https://pubchem.ncbi.nlm.nih.gov/compound/58460047) | Thoueille_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 14:19 | 1:51 | 1/0/0 | 0/0/0 | 0/0/0 | 96,238/6,946 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Thoueille_2024_reference](drugs/drug_doravirine/Doravirine_Thoueille2024_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Thoueille P et al., Population pharmacokinetic analysis of…, British journal of clinical… (2024) | [10.1111/bcp.15975](https://doi.org/10.1111/bcp.15975) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=doravirine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yee_2019.pdf` | Yee KL et al., Population Pharmacokinetics of Doraviri…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.02502-18](https://doi.org/10.1128/AAC.02502-18) | [30745394](https://pubmed.ncbi.nlm.nih.gov/30745394) | The paper is a definitive population PK study for doravirine, but the abstract provided does not contain specific numeric parameter estimates (CL, V, Q), only model structure and covariate findings. |
| `Moltó_2022.pdf` | Moltó J et al., Removal of doravirine by haemodialysis…, The Journal of antimicrobia… (2022) | popPK | 6 | [10.1093/jac/dkac126](https://doi.org/10.1093/jac/dkac126) | [35425985](https://pubmed.ncbi.nlm.nih.gov/35425985) | The study measures doravirine plasma concentrations and dialysis extraction in humans but does not report compartmental population-pharmacokinetic parameters (CL, V, etc.). |

<sub>queue written 2026-10-07T14:17:37.815232+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fromage_2024 | irrelevant | 2 | 1 | The study is an in silico simulation evaluating drug exposure after missed doses, reporting only simulated concentration metrics (C24h, proportion above IC50) rather than population pharmacokinetic parameter estimates (CL, V, Q, ka). |
| popPK | Li_2022 | irrelevant | 1 | 1 | The paper is a review of HIV reverse transcriptase inhibitors that does not report quantitative pharmacokinetic parameters (CL, V, etc.) for doravirine, only general mentions in the context of drug discovery and clinical trials. |
| popPK | Moltó_2022 | relevant | 6 | 2 | The study measures doravirine plasma concentrations and dialysis extraction in humans but does not report compartmental population-pharmacokinetic parameters (CL, V, etc.). |
| popPK | Sun_2024 | irrelevant | 2 | 2 | Doravirine is used solely as a comparator drug, and the provided PK values (half-life, bioavailability) are insufficient for population-pharmacokinetic modeling parameters like clearance or volume. |
| popPK | Vaddady_2020 | relevant | 7 | 3 | The study describes a population PK model for doravirine, but the specific compartmental parameter values (CL, V, etc.) are in supplemental Table S1 which is not provided; only steady-state exposure metrics (AUC, Cmax, C24) are present in the main text. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The study reports in-vitro antiviral potency (EC50) and solubility, not pharmacokinetic parameters for doravirine. |
| popPK | Wang_2024 | irrelevant | 0 | 0 | The study reports in-vitro metabolic stability and clearance for a novel compound (11h), with doravirine serving only as a reference standard for antiviral potency, providing no population PK parameters for doravirine. |
| popPK | Yee_2019 | relevant | 10 | 2 | The paper is a definitive population PK study for doravirine, but the abstract provided does not contain specific numeric parameter estimates (CL, V, Q), only model structure and covariate findings. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 14:17 UTC</sub>
