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

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=heptabarbital) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
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
