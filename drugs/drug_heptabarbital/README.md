<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;heptabarbital&quot;}]"></div>

# heptabarbital

- **generic name:** heptabarbital
- **ATC codes:** `N05CA11`
- **DrugBank:** [DB01354](https://go.drugbank.com/drugs/DB01354) · **PubChem:** [CID 10518](https://pubchem.ncbi.nlm.nih.gov/compound/10518)
- **molar mass:** 250.2936 g/mol (C13H18N2O3) — DrugBank
- **groups:** experimental

## About

Heptabarbital is a barbiturate that was classified as a hypnotic and sedative for calming or sleep-inducing purposes. It is no longer in routine medical use and is regarded today as an experimental compound rather than an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410829](https://www.wikidata.org/wiki/Q410829) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:09 | 0:15 | 0/0/0 | 1/0/0 | 0/0/0 | 20,398/1,615 | ollama / glm-5.3-flash | 1 | 1/0 | 0/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1990_AMP_TNW_0_5_2_5_Hz_Model_1](drugs/drug_heptabarbital/pd_Mandema_1990_AMP_TNW_0_5_2_5_Hz_Model_1.md) | Biphasic EEG effect (increase followed by decrease), 0.5-2.5 Hz frequency range, Model 1 ← heptabarbital · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1990) | [10.1007/BF01061705](https://doi.org/10.1007/BF01061705) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1990_AMP_TNW_0_5_2_5_Hz_Model_2](drugs/drug_heptabarbital/pd_Mandema_1990_AMP_TNW_0_5_2_5_Hz_Model_2.md) | Biphasic EEG effect (increase followed by decrease), 0.5-2.5 Hz frequency range, Model 2 ← heptabarbital · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1990) | [10.1007/BF01061705](https://doi.org/10.1007/BF01061705) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1990_AMP_TNW_2_5_Hz](drugs/drug_heptabarbital/pd_Mandema_1990_AMP_TNW_2_5_Hz.md) | EEG parameters (AMP and TNW) in discrete frequency ranges greater than 2.5 Hz ← heptabarbital · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1990) | [10.1007/BF01061705](https://doi.org/10.1007/BF01061705) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Mandema_1990_TNW_2_5_30_Hz](drugs/drug_heptabarbital/pd_Mandema_1990_TNW_2_5_30_Hz.md) | Total number of waves per second, 2.5-30 Hz frequency range ← heptabarbital · direct sigmoid Emax (Hill) effect | — | Mandema JW et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacokinetics… (1990) | [10.1007/BF01061705](https://doi.org/10.1007/BF01061705) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=heptabarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mandema_1990 | irrelevant | 4 | 2 | PK-PD study in rats dosed with heptabarbital, but only pharmacodynamic (EEG Emax/EC50) values are reported; no CL/V/compartmental PK parameters appear, and PK values are not shown in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
