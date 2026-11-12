<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Tityustoxin (Tityus serrulatus )&quot;}]"></div>

# Tityustoxin (Tityus serrulatus )

- **generic name:** Tityustoxin (Tityus serrulatus )
- **T3DB:** [T3D2526](http://www.t3db.ca/toxins/T3D2526) · **PubChem:** none

## About

Tityustoxin is a peptide toxin produced by the Brazilian scorpion (Tityus serrulatus). It binds to voltage-dependent sodium and potassium channels.

- **Category:** Protein, Natural Toxin, Animal Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Tityustoxin is a peptide toxin produced by the Brazilian scorpion (Tityus serrulatus).
- **Mechanism of toxicity:** Tityustoxin binds to voltage-dependent sodium and potassium channels. alpha-Type tityustoxin inhibits the inactivation of the activated sodium channels by binding to site 3, causing cell depolarization, which increases calcium uptake and triggers acetylcholine release. beta-Type tityustoxin binds voltage-independently at site-4 of sodium channels and shift the voltage of activation toward more negative potentials, thereby affecting sodium channel activation and promoting spontaneous and repetitive firing.
- **Health effects:** Tityustoxin is a potent neurotoxin. It also affects the circulatory and respiratory systems.
- **Acute toxicity:** LD50: 6 ug/kg (Intracerebroventricular, Mouse)
LD50: 0.43 mg/kg (Subcutaneous, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2526">T3DB T3D2526</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 39465-37-7</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Nunan_2004_adult_rats](drugs/toxin_tityustoxin_tityus_serrulatus/TityustoxinTityusSerrulatus_Nunan2004_adult_rats.md) | — | 1-compartment (no model) | 8 | Nunan EA et al., Age effects on the pharmacokinetics of…, Brazilian journal of medica… (2004) | [10.1590/s0100-879x2004000300016](https://doi.org/10.1590/s0100-879x2004000300016) |
| <span class="pk-rf" hidden data-species="rat" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ young_rats](drugs/toxin_tityustoxin_tityus_serrulatus/TityustoxinTityusSerrulatus_Nunan2004_young_rats.md) | — | 1-compartment (no model) | 8 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 03:58 | 6:41 | 0/2/0 | 0/0/0 | 0/0/0 | 58,765/2,720 | einfracz / qwen3.8-27b | 3 | 2/1 | 3/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Catanzaro_1978 | irrelevant | 0 | 0 | The paper reports secretory activity and dose-response data but contains no quantitative toxicokinetic parameters (e.g., clearance, half-life, distribution volume) for tityustoxin. |
| popPK | Dou_2024 | irrelevant | 0 | 0 | The paper focuses on the interaction between the grape pathogen Colletotrichum viniferum and grapevines, and contains no data regarding tityustoxin or its toxicokinetics. |
| popPK | Guidine_2008 | irrelevant | 2 | 0 | The paper is a therapeutic efficacy study measuring survival and lung edema, reporting no quantitative toxicokinetic parameters (half-life, clearance, volume of distribution) for tityustoxin. |
| popPK | O_2007 | irrelevant | 0 | 0 | The paper describes ophthalmic surgical techniques and outcomes and contains no toxicokinetic data for tityustoxin. |
| popPK | Savino_1985 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (contractile response) of tityustoxin on isolated rat tail arteries but contains no toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Smyth_1988 | irrelevant | 0 | 0 | The paper studies the renal effects of neuropeptide Y and clonidine, and does not report any toxicokinetic parameters for tityustoxin_tityus_serrulatus. |
| popPK | Xin_2003 | irrelevant | 0 | 0 | The paper concerns a plant virus (Tobacco streak virus) and host recovery in tobacco plants, with no mention of tityustoxin or any toxicokinetic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btityustoxin_tityus_serrulatus%5D&body=Drug%3A%20tityustoxin_tityus_serrulatus%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tityustoxin_tityus_serrulatus/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 03:57 UTC</sub>
