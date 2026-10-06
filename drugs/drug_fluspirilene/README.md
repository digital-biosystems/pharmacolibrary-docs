<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;fluspirilene&quot;}]"></div>

# fluspirilene

- **generic name:** fluspirilene
- **ATC codes:** `N05AG01`
- **DrugBank:** [DB04842](https://go.drugbank.com/drugs/DB04842) · **PubChem:** [CID 3396](https://pubchem.ncbi.nlm.nih.gov/compound/3396)
- **molar mass:** 475.5727 g/mol (C29H31F2N3O) — DrugBank
- **groups:** approved, withdrawn

## About

Fluspirilene is a diphenylbutylpiperidine antipsychotic and dopamine antagonist used to treat psychotic disorders such as schizophrenia. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q408300](https://www.wikidata.org/wiki/Q408300) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 15:45 | 0:27 | 0/0/0 | 2/2/0 | 0/0/0 | 42,423/1,628 | ollama / glm-5.3-flash | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Grantham_1994_N_type_Ca2_current](drugs/drug_fluspirilene/pd_Grantham_1994_N_type_Ca2_current.md) | N-type calcium current block (fraction of current blocked) ← fluspirilene · direct sigmoid Emax (Hill) effect | — | Grantham CJ et al., Fluspirilene block of N-type calcium cu…, British journal of pharmaco… (1994) | [10.1111/j.1476-5381.1994.tb14762.x](https://doi.org/10.1111/j.1476-5381.1994.tb14762.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kenny_1990_3H_PN_200_110_binding](drugs/drug_fluspirilene/pd_Kenny_1990_3H_PN_200_110_binding.md) | Displacement of [3H]-PN-200-110 binding to rat cerebral cortical membranes ← fluspirilene · direct sigmoid Emax (Hill) effect | — | Kenny BA et al., Selective antagonism of calcium channel…, British journal of pharmaco… (1990) | [10.1111/j.1476-5381.1990.tb15784.x](https://doi.org/10.1111/j.1476-5381.1990.tb15784.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_N_type_current](drugs/drug_fluspirilene/pd_Sah_1994_N_type_current.md) | N-type Ca2+ channel current inhibition ← fluspirilene · direct Emax (saturable) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_P_type_current](drugs/drug_fluspirilene/pd_Sah_1994_P_type_current.md) | P-type Ca2+ channel current inhibition ← fluspirilene · direct Emax (saturable) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sczekan_1996_Ca_2_release](drugs/drug_fluspirilene/pd_Sczekan_1996_Ca_2_release.md) | IP3-induced Ca(2+)-release from Ca(2+)-loaded rat brain microsomes ← fluspirilene · inhibition effect | — | Sczekan SR et al., Antipsychotic drugs block IP3-dependent…, Biological psychiatry (1996) | [10.1016/0006-3223(95)00657-5](https://doi.org/10.1016/0006-3223(95)00657-5) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluspirilene) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNG1 (inhibitor), DRD2 (target), HTR2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dhaka_2025 | irrelevant | 0 | 0 | This is an antiviral/host-protein interaction study; fluspirilene is only a tested inhibitor with EC50 values, no PK parameters reported. |
| popPK | Grantham_1994 | irrelevant | 0 | 0 | In-vitro electrophysiology study of calcium channel blockade; no pharmacokinetic parameters for fluspirilene. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | In-vitro pharmacology study of calcium channel antagonism; no PK disposition parameters for fluspirilene. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | In-vitro electrophysiology study of calcium channel blockade; no pharmacokinetic disposition parameters for fluspirilene. |
| popPK | Sczekan_1996 | irrelevant | 0 | 0 | In-vitro mechanistic study of Ca2+ release in rat brain microsomes with no pharmacokinetic parameters for fluspirilene. |
| popPK | Vaidya_2025 | irrelevant | 0 | 0 | This is an AI/ML QSAR drug-repurposing study for EBV; fluspirilene appears only as a docking hit with no PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
