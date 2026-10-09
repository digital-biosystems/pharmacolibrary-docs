<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Cammarata2025_reference&quot;,&quot;label&quot;:&quot;Cammarata_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Durlobactam

- **generic name:** Durlobactam
- **ATC codes:** not captured
- **DrugBank:** [DB16704](https://go.drugbank.com/drugs/DB16704) · **PubChem:** not captured
- **molar mass:** 277.25 g/mol (C8H11N3O6S) — DrugBank
- **groups:** approved, investigational

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| durlobactam | parent | 277.25 | C8H11N3O6S | DrugBank | — | Cammarata_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:33 | 8:27 | 1/0/0 | 1/0/0 | 0/0/0 | 407,806/8,059 | einfracz / qwen3.8-27b | 26 | 0/12 | 26/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cammarata_2025_reference](drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 9 (+1 cov.) | Cammarata AP et al., Population pharmacokinetic analyses for…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [ODonnell_2023_Bacterial_Survival](drugs/drug_durlobactam/pd_ODonnell_2023_Bacterial_Survival.md) | Bacterial Survival ← durlobactam · direct Emax (saturable) effect | — | O'Donnell JP et al., The Pharmacokinetics/Pharmacodynamic Re…, Clinical infectious disease… (2023) | [10.1093/cid/ciad096](https://doi.org/10.1093/cid/ciad096) |
| <span class="pk-badge pk-badge--green">extracted</span> | [ODonnell_2023_MIC](drugs/drug_durlobactam/pd_ODonnell_2023_MIC.md) | MIC ← durlobactam · direct linear effect | — | O'Donnell JP et al., The Pharmacokinetics/Pharmacodynamic Re…, Clinical infectious disease… (2023) | [10.1093/cid/ciad096](https://doi.org/10.1093/cid/ciad096) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=durlobactam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 54 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abouelhassan_2025 | irrelevant | 3 | 2 | The study is an ex vivo model using bovine blood to determine transmembrane clearance for dialysis, not an in vivo pharmacokinetic study reporting compartmental parameters (CL, V, t1/2) for durlobactam in a biological subject. |
| popPK | Cojutti_2024 | irrelevant | 0 | 0 | The study focuses on piperacillin/tazobactam pharmacokinetics, not durlobactam. |
| PGx | Gatti_2026 | not_relevant | 0 | 0 | This is a narrative review on clinical trials and real-world evidence for novel beta-lactams/BLIs; it contains no data on pharmacogenomic effects on PK/PD parameters. |
| popPK | Huang_2024 | irrelevant | 0 | 0 | The study investigates FL058 (a different drug), not durlobactam. |
| popPK | Ma_2024 | irrelevant | 0 | 0 | The paper is an in-vitro study on bacterial resistance dynamics using amoxicillin and clavulanic/sulbactam/tazobactam; durlobactam is only mentioned in the introduction as context, and no pharmacokinetic parameters are reported. |
| popPK | Mezcord_2026 | irrelevant | 0 | 0 | The study investigates cefiderocol resistance mechanisms in Acinetobacter baumannii involving vitamin B12 and does not contain pharmacokinetic data for durlobactam. |
| popPK | ODonnell_2024 | irrelevant | 2 | 1 | This is an in vitro PK/PD study in a hollow fiber infection model, not a physiologic pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for durlobactam. |
| popPK | Onita_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sulbactam, not durlobactam; durlobactam is only mentioned as a co-administered partner drug. |
| popPK | Pai_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ceftolozane and tazobactam; durlobactam is only mentioned in passing as a different approved antibiotic (sulbactam-durlobactam) and no PK parameters for it are reported. |
| popPK | Zasheva_2024 | irrelevant | 0 | 0 | This is a review on patient access and regulatory approval timelines for antibiotics, not a pharmacokinetic study, and contains no PK parameters for durlobactam. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-09 10:30 UTC</sub>
