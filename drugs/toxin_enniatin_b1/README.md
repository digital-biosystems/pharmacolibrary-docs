<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Enniatin B1&quot;}]"></div>

# Enniatin B1

- **generic name:** Enniatin B1
- **T3DB:** [T3D3759](http://www.t3db.ca/toxins/T3D3759) · **PubChem:** [CID 467499](https://pubchem.ncbi.nlm.nih.gov/compound/467499)

## About

Enniatins are mycotoxins that appear in nature as a mixture of cyclohexadepsipeptides produced by bacteria, fungi, and plants. They may be found in contaminated cereal crops. Enniatins have various biological activities and can act as enzyme inhibitors, antifungal and antibacterial agents, and immunomodulatory substances.

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Enniatins are mycotoxins that appear in nature as a mixture of cyclohexadepsipeptides produced by bacteria, fungi, and plants. They may be found in contaminated cereal crops.
- **Mechanism of toxicity:** Enniatins are toxic due to their ability to act as ionophores, changing ion transport across membranes and disrupting the ionic selectivity of cell walls. In the membrane, enniatins form a dimeric structure and are able to transport monovalent ions (especially K+, Mg2+,Ca2+ and Na+) across the membranes. …
- **Health effects:** Enniatins are cytotoxic. They may also act as antifungal and antibacterial agents, and immunomodulatory substances.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3759">T3DB T3D3759</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 19914-20-6</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Enniatin B1 (enniatin_b1) | parent | 653.8 | C34H59N3O9 | PubChem | [467499](https://pubchem.ncbi.nlm.nih.gov/compound/467499) | Devreese_2014, Fraeyman_2016, Mahdjoub_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="pig" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Devreese_2014_reference](drugs/toxin_enniatin_b1/EnniatinB1_Devreese2014_reference.md) | held back | retention, 2 pools | 3 | Devreese M et al., Pilot toxicokinetic study and absolute…, Food and chemical toxicolog… (2014) | [10.1016/j.fct.2013.11.005](https://doi.org/10.1016/j.fct.2013.11.005) |
| <span class="pk-rf" hidden data-species="bird" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Fraeyman_2016_reference](drugs/toxin_enniatin_b1/EnniatinB1_Fraeyman2016_reference.md) | held back | 1-compartment, IV | 1 | Fraeyman S et al., Comparative Oral Bioavailability, Toxic…, Journal of agricultural and… (2016) | [10.1021/acs.jafc.6b02913](https://doi.org/10.1021/acs.jafc.6b02913) |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: no kinetic quantity — no half-life, rate constant, volume or clearance (exposur…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Mahdjoub_2026_reference](drugs/toxin_enniatin_b1/EnniatinB1_Mahdjoub2026_reference.md) | — | 1-compartment (no model) | 1 | Mahdjoub M et al., In vitro hepatic clearance of enniatin…, Archives of toxicology (2026) | [10.1007/s00204-026-04302-5](https://doi.org/10.1007/s00204-026-04302-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 00:07 | 3:54 | 2/1/0 | 0/0/0 | 0/0/0 | 75,232/5,178 | einfracz / qwen3.8-flash-next | 6 | 2/2 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fraeyman_2016.pdf` | Fraeyman S et al., Comparative Oral Bioavailability, Toxic…, Journal of agricultural and… (2016) | popPK | 10 | [10.1021/acs.jafc.6b02913](https://doi.org/10.1021/acs.jafc.6b02913) | [27632250](https://pubmed.ncbi.nlm.nih.gov/27632250) | The paper reports specific quantitative toxicokinetic parameters for enniatin B1, including absolute oral bioavailability, volume of distribution, and total body clearance. |
| `Ivanova_2017.pdf` | Ivanova L et al., Biotransformation of the mycotoxin enni…, Food and chemical toxicolog… (2017) | popPK | 9 | [10.1016/j.fct.2017.04.041](https://doi.org/10.1016/j.fct.2017.04.041) | [28472676](https://pubmed.ncbi.nlm.nih.gov/28472676) | The abstract explicitly states that kinetic parameters were determined and compares metabolic rates (formation/elimination), but does not provide the specific numerical values for these parameters, which are likely in the full text or supplementary materials not provided here. |
| `Mahdjoub_2026.pdf` | Mahdjoub M et al., In vitro hepatic clearance of enniatin…, Archives of toxicology (2026) | popPK | 9 | [10.1007/s00204-026-04302-5](https://doi.org/10.1007/s00204-026-04302-5) | [41699314](https://pubmed.ncbi.nlm.nih.gov/41699314) | The paper reports quantitative hepatic clearance values (3.4 L/(h·kg) for rat and 1 L/(h·kg) for human) for enniatin B1. |

<sub>queue written 2026-11-19 00:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dasí-Navarro_2024 | irrelevant | 1 | 0 | The paper reports urinary concentrations (biomonitoring/exposure) but no quantitative toxicokinetic parameters such as half-lives, clearance, or model parameters. |
| popPK | Ivanova_2017 | relevant | 9 | 1 | The abstract explicitly states that kinetic parameters were determined and compares metabolic rates (formation/elimination), but does not provide the specific numerical values for these parameters, which are likely in the full text or supplementary materials not provided here. |
| PGx | Ivanova_2019 | not_relevant | 0 | 0 | The study reports enzyme kinetics and drug-drug interactions involving CYP3A4 inhibition and metabolism, but does not assess pharmacogenomic effects related to human genetic polymorphisms (genotypes/phenotypes). |
| popPK | Rodríguez-Carrasco_2020 | irrelevant | 1 | 0 | The paper is a biomonitoring study reporting urinary concentrations of Enniatin B1 in a human population, which are exposure levels rather than kinetic parameters (such as half-life, clearance, or partition coefficients); the few kinetic values mentioned (bioavailability) refer to previous studies in pigs/chickens not detailed here. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Benniatin_b1%5D&body=Drug%3A%20enniatin_b1%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_enniatin_b1/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 00:06 UTC</sub>
