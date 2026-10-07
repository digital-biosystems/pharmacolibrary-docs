<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;delamanid&quot;}]"></div>

# delamanid

- **generic name:** delamanid
- **ATC codes:** `J04AK06`
- **DrugBank:** [DB11637](https://go.drugbank.com/drugs/DB11637) · **PubChem:** not captured
- **molar mass:** 534.492 g/mol (C25H25F3N4O6) — DrugBank
- **groups:** approved, investigational

## About

Delamanid is used to treat multidrug-resistant tuberculosis. It is authorised in the European Union and is included on the WHO essential medicines list.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15408413](https://www.wikidata.org/wiki/Q15408413) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| delamanid | parent | 534.492 | C25H25F3N4O6 | DrugBank | — | Wang_2020 |
| DM-6705 | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:45 | 4:33 | 0/2/1 | 0/0/0 | 0/0/0 | 160,141/9,935 | einfracz / qwen3.8-27b | 8 | 8/0 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q95 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Wang_2020_reference](drugs/drug_delamanid/Delamanid_Wang2020_reference.md) | — | 2-compartment (no model) | 10 (+3 cov.) | Wang X et al., Population Pharmacokinetic Analysis of…, Antimicrobial agents and ch… (2020) | [10.1128/AAC.01202-20](https://doi.org/10.1128/AAC.01202-20) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Sasaki_2022_reference](drugs/drug_delamanid/Delamanid_Sasaki2022_reference.md) | — | parent + metabolite (no model) | 0 | Sasaki T et al., Population Pharmacokinetic and Concentr…, Antimicrobial agents and ch… (2022) | [10.1128/AAC.01608-21](https://doi.org/10.1128/AAC.01608-21) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Tanneau_2022_reference](drugs/drug_delamanid/Delamanid_Tanneau2022_reference.md) | — | 1-compartment (no model) | 0 | Tanneau L et al., Population Pharmacokinetics of Delamani…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01133-2](https://doi.org/10.1007/s40262-022-01133-2) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=delamanid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` substrate, `ORM1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Alghamdi_2021.pdf` | Alghamdi WA et al., Pharmacokinetics of bedaquiline, delama…, The Journal of antimicrobia… (2021) | popPK | 9 | [10.1093/jac/dkaa550](https://doi.org/10.1093/jac/dkaa550) | [33378452](https://pubmed.ncbi.nlm.nih.gov/33378452) | The study reports delamanid pharmacokinetics using non-compartmental analysis, but only provides exposure metrics (AUC, Cmin) and lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required. |

<sub>queue written 2026-10-07T12:42:38.436257+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alghamdi_2021 | relevant | 9 | 2 | The study reports delamanid pharmacokinetics using non-compartmental analysis, but only provides exposure metrics (AUC, Cmin) and lacks the specific quantitative disposition parameters (CL, V, ka, half-life) required. |
| popPK | Dierig_2023 | irrelevant | 2 | 0 | The paper is a study protocol for the DECODE trial where delamanid is a co-administered background therapy, not the primary subject drug (which is delpazolid), and it contains no quantitative pharmacokinetic parameters for delamanid. |
| popPK | Montepiedra_2024 | irrelevant | 2 | 1 | The paper is a simulation study for optimal design and reports relative standard errors (RSE) for parameter estimation, not the actual quantitative population pharmacokinetic parameter values (e.g., mean CL, V) for delamanid. |
| popPK | Rajoli_2018 | irrelevant | 2 | 0 | The paper is a PBPK modeling study that utilizes existing population PK data for delamanid but does not report original quantitative disposition parameter values (CL, V, etc.) within the provided text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:43 UTC</sub>
