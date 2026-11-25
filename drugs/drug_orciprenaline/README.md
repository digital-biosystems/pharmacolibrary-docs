<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R03A&quot;,&quot;href&quot;:&quot;atc/R03A.md&quot;},{&quot;label&quot;:&quot;orciprenaline&quot;}]"></div>

# orciprenaline

- **generic name:** orciprenaline
- **ATC codes:** `R03AB03`, `R03CB03`
- **DrugBank:** [DB00816](https://go.drugbank.com/drugs/DB00816) · **PubChem:** [CID 4086](https://pubchem.ncbi.nlm.nih.gov/compound/4086)
- **molar mass:** 211.2576 g/mol (C11H17NO3) — DrugBank
- **groups:** approved

## About

Orciprenaline is a moderately selective beta-2 adrenergic receptor agonist used to treat asthma and obstructive lung disease. It can be given orally, by inhalation, or via parenteral routes. It is an approved medication.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416473](https://www.wikidata.org/wiki/Q416473), [Wikipedia](https://en.wikipedia.org/wiki/Orciprenaline?oldid=1329471850) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| orciprenaline | parent | 211.258 | C11H17NO3 | DrugBank | [4086](https://pubchem.ncbi.nlm.nih.gov/compound/4086) | Dengler_1976 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Dengler_1976_reference](drugs/drug_orciprenaline/Orciprenaline_Dengler1976_reference.md) | — | 1-compartment (no model) | 3 | Dengler HG et al., Metabolism and pharmacokinetics of orci…, Archives internationales de… (1976) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Semenov_2019_EI](drugs/drug_orciprenaline/pd_Semenov_2019_EI.md) | red blood cell deformability (elongation index) ← metaproterenol · direct sigmoid Emax (Hill) effect | — | Semenov AN et al., The Effects of Different Signaling Path…, Frontiers in physiology (2019) | [10.3389/fphys.2019.00923](https://doi.org/10.3389/fphys.2019.00923) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:42 | 0:03 | 1/0/0 | 1/0/0 | 0/0/0 | 3,490/151 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Broadley_1979 | irrelevant | 0 | 0 | The study is an in vitro pharmacodynamic analysis measuring potency and affinity, not a pharmacokinetic study. |
| PGx | Broadley_1979 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamics of sympathomimetic amines but does not investigate the effect of any gene variant or genotype on PK/PD parameters. |
| popPK | Broadley_1983 | irrelevant | 0 | 0 | The study focuses on in-vitro pharmacodynamics and receptor binding affinity (KA) in guinea-pig heart tissue, not population pharmacokinetics. |
| PGx | Broadley_1983 | not_relevant | 0 | 0 | The paper investigates temperature-induced changes in pharmacodynamics, not gene variant/pharmacogenomic effects. |
| PGx | Dengler_1976 | not_relevant | 0 | 0 | The paper investigates the metabolism and pharmacokinetics of orciprenaline across different animal species and humans, but it does not report any pharmacogenomic effects or variations based on genetic differences. |
| popPK | Gay_1987 | irrelevant | 0 | 0 | The study focuses on the respiratory mechanics and bronchodilator effects of metaproterenol, not the pharmacokinetics of orciprenaline. |
| PGx | Gay_1987 | not_relevant | 0 | 0 | The paper evaluates the bronchodilator response to metaproterenol in mechanically ventilated patients and does not involve orciprenaline or any genetic variants. |
| popPK | Kimura_1998 | irrelevant | 0 | 0 | The paper investigates the effects of IGF-I and IGF-II on rat hepatocyte proliferation and does not report pharmacokinetic parameters for orciprenaline. |
| PGx | Kimura_1998 | not_relevant | 0 | 0 | The paper studies IGF-I and IGF-II effects on rat hepatocytes and mentions metaproterenol (a related beta-agonist) as a modulator, but does not report pharmacogenomic data or specific PK/PD parameters for orciprenaline. |
| popPK | Kimura_1999 | irrelevant | 0 | 0 | This is a mechanistic in-vitro study on rat hepatocyte proliferation, not a pharmacokinetic study of orciprenaline (which is not even mentioned in the provided text). |
| PGx | Kimura_1999 | not_relevant | 0 | 0 | The paper investigates cell proliferation mechanisms in rat hepatocytes and does not mention orciprenaline or any human gene variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | ODonnell_1978 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study comparing receptor potency, not a pharmacokinetic study with disposition parameters. |
| PGx | ODonnell_1978 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological data on guinea-pigs and does not investigate the impact of human gene variants on the pharmacokinetics or pharmacodynamics of orciprenaline. |
| popPK | Semenov_2019 | irrelevant | 0 | 0 | Orciprenaline (metaproterenol) appears only as an in vitro β2-agonist in RBC deformability experiments with EC50 pharmacodynamic values, not any PK disposition parameters. |
| popPK | Williams_1983 | irrelevant | 0 | 0 | The paper reports in-vitro functional receptor binding/affinity parameters (EC50, KA) rather than pharmacokinetic disposition parameters. |
| PGx | Williams_1983 | not_relevant | 0 | 0 | The study investigates reserpine-induced supersensitivity in guinea-pigs, not a genetic variant or genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Borciprenaline%5D&body=Drug%3A%20orciprenaline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_orciprenaline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:41 UTC</sub>
