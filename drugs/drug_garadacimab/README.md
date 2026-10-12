<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;garadacimab&quot;}]"></div>

# garadacimab

- **generic name:** garadacimab
- **ATC codes:** `B06AC07`
- **DrugBank:** [DB15629](https://go.drugbank.com/drugs/DB15629) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Garadacimab is a monoclonal antibody used to treat hereditary angioedema. It is authorised in the European Union.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 01:51 | 4:45 | 0/2/0 | 2/0/0 | 0/0/0 | 71,707/14,581 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/2 | 2/0 | 2 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper (the values present come f…</sub><br><sub>route_to: `human_review`</sub> | [Garcia_2025_reference](drugs/drug_garadacimab/Garadacimab_Garcia2025_reference.md) | — | 2-compartment (no model) | 1 | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Pawaskar_2022_reference](drugs/drug_garadacimab/Garadacimab_Pawaskar2022_reference.md) | — | 1-compartment (no model) | 0 | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Garcia_2025_FXIIa_mediated_kallikrein_activity_POB](drugs/drug_garadacimab/pd_Garcia_2025_FXIIa_mediated_kallikrein_activity_POB.md) | FXIIa-mediated kallikrein activity percent of baseline ← garadacimab · direct sigmoid Emax (Hill) effect | — | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Garcia_2025_HAE_attack](drugs/drug_garadacimab/pd_Garcia_2025_HAE_attack.md) | HAE attacks ← garadacimab · direct Emax (saturable) effect | — | Garcia R et al., Population Pharmacokinetic/Pharmacodyna…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70009](https://doi.org/10.1002/psp4.70009) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span> | [Pawaskar_2022_FXIIa](drugs/drug_garadacimab/pd_Pawaskar_2022_FXIIa.md) | FXIIa-mediated kallikrein activity ← garadacimab · target-mediated drug disposition | — | Pawaskar D et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical and translational… (2022) | [10.1111/cts.13192](https://doi.org/10.1111/cts.13192) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 01:47 UTC</sub>
