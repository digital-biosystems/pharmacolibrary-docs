<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;zoledronic acid&quot;}]"></div>

# zoledronic acid

- **generic name:** zoledronic acid
- **ATC codes:** `M05BA08`
- **DrugBank:** [DB00399](https://go.drugbank.com/drugs/DB00399) · **PubChem:** [CID 68740](https://pubchem.ncbi.nlm.nih.gov/compound/68740)
- **molar mass:** 272.0896 g/mol (C5H10N2O7P2) — DrugBank
- **groups:** approved, investigational

## About

Zoledronic acid is a bisphosphonate used for bone conditions such as osteoporosis, high blood calcium, and bone problems linked to cancer. It is widely used and appears on the WHO essential medicines list, with an authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q218507](https://www.wikidata.org/wiki/Q218507) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:24 | 0:21 | 0/0/0 | 1/0/0 | 0/0/0 | 44,839/1,482 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | [Wang_2023_APR](drugs/drug_zoledronic_acid/pd_Wang_2023_APR.md) | acute phase reaction ← zoledronic acid · model not identified | — | Wang H et al., Optimization of the dosage regimen of z…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1089774](https://doi.org/10.3389/fphar.2023.1089774) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span> | [Wang_2023_BMD](drugs/drug_zoledronic_acid/pd_Wang_2023_BMD.md) | bone mineral density ← zoledronic acid · indirect response — drug stimulates the production of bone mineral density | — | Wang H et al., Optimization of the dosage regimen of z…, Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1089774](https://doi.org/10.3389/fphar.2023.1089774) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=zoledronic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: FDPS (inhibitor), GGPS1 (inhibitor), Hydroxylapatite (binder), Hydroxylapatite (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The study investigates the effects of zoledronic acid on thyroid hormones and inflammatory markers, reporting no pharmacokinetic parameters (clearance, volume, half-life) for the drug itself. |
| popPK | Mandema_2014 | irrelevant | 0 | 0 | The paper is a meta-analysis of bone mineral density changes and does not report pharmacokinetic parameters for zoledronic acid. |
| popPK | Massa_2025 | irrelevant | 0 | 0 | The study is a clinical outcomes analysis comparing pain relief and skeletal-related events between denosumab and zoledronic acid, with no pharmacokinetic parameters reported. |
| popPK | Wang_2011 | irrelevant | 2 | 6 | The study reports pharmacokinetic parameters for the radiolabeled derivative (99mTc-i-PIDP), not zoledronic acid itself, and the subject is an imaging agent. |
| popPK | Wang_2023 | irrelevant | 4 | 2 | The study reports a kinetic-pharmacodynamic (KPD) model parameters for bone mineral density response rather than standard population pharmacokinetic (PK) disposition parameters (CL, V, half-life) for zoledronic acid, and the specific numeric parameter values are located in Table 2 which is not included in the evidence. |
| popPK | Weinfurt_2005 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing health-related quality of life and skeletal-related events, reporting no pharmacokinetic parameters. |
| popPK | Wu_2021 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic modeling of bone mineral density and bone turnover markers, not the pharmacokinetic disposition parameters (CL, V, ka) of zoledronic acid. |
| popPK | Zecca_2025 | irrelevant | 0 | 0 | The study is a clinical trial comparing analgesic efficacy and survival, not a pharmacokinetic study, and it reports no disposition parameters like clearance or volume for zoledronic acid. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
