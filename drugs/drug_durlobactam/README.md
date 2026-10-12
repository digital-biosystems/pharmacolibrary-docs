<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Durlobactam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Durlobactam_Cammarata2025_reference&quot;,&quot;label&quot;:&quot;Cammarata_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Durlobactam

- **generic name:** Durlobactam
- **ATC codes:** not captured
- **DrugBank:** [DB16704](https://go.drugbank.com/drugs/DB16704) · **PubChem:** not captured
- **molar mass:** 277.25 g/mol (C8H11N3O6S) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Durlobactam is a diazabicyclooctane non-beta-lactam, beta-lactamase inhibitor. It is typically given in combination with [sulbactam] to protect it from degradation by certain serine-beta-lactamases.[L47336] The combination product of durlobactam and sulbactam was first approved by the FDA in May 2023.[A263306] It is used to treat hospital-acquired bacterial pneumonia and ventilator-associated bacterial pneumonia (HABP/VABP), caused by susceptible isolates of _Acinetobacter baumannii-calcoaceticus_ complex.[L47336]

**Indication.** In combination with [sulbactam], durlobactam is indicated in adults for the treatment of hospital-acquired bacterial pneumonia and ventilator-associated bacterial pneumonia (HABP/VABP), caused by susceptible isolates of _Acinetobacter baumannii-calcoaceticus_ complex.[L47336]

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| durlobactam | parent | 277.25 | C8H11N3O6S | DrugBank | — | Cammarata_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-09 10:33 | 8:27 | 0/0/1 | 1/0/0 | 0/0/0 | 407,806/8,059 | einfracz / qwen3.8-27b | 26 | 0/12 | 26/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: unreported model parameter default(s): ka</sub><br><sub>route_to: `scholar`</sub> | [Cammarata_2025_reference](drugs/drug_durlobactam/Durlobactam_Cammarata2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 9 (+1 cov.) | Cammarata AP et al., Population pharmacokinetic analyses for…, Antimicrobial agents and ch… (2025) | [10.1128/aac.00485-24](https://doi.org/10.1128/aac.00485-24) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [ODonnell_2023_Bacterial_Survival](drugs/drug_durlobactam/pd_ODonnell_2023_Bacterial_Survival.md) | Bacterial Survival ← durlobactam · direct Emax (saturable) effect | — | O'Donnell JP et al., The Pharmacokinetics/Pharmacodynamic Re…, Clinical infectious disease… (2023) | [10.1093/cid/ciad096](https://doi.org/10.1093/cid/ciad096) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">other organism</span> | [ODonnell_2023_MIC](drugs/drug_durlobactam/pd_ODonnell_2023_MIC.md) | MIC ← durlobactam · direct linear effect | — | O'Donnell JP et al., The Pharmacokinetics/Pharmacodynamic Re…, Clinical infectious disease… (2023) | [10.1093/cid/ciad096](https://doi.org/10.1093/cid/ciad096) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=durlobactam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | lung | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A6` substrate | DrugBank actor |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 82 matched, 54 returned
- **screened:** 5  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
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
