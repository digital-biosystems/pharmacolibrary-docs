<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;1-Bromobutane&quot;}]"></div>

# 1-Bromobutane

- **generic name:** 1-Bromobutane
- **T3DB:** [T3D1781](http://www.t3db.ca/toxins/T3D1781) · **PubChem:** [CID 8002](https://pubchem.ncbi.nlm.nih.gov/compound/8002)

## About

1-Bromobutane is a colorless liquid that is insoluble in water, but soluble in ethanol and diethyl ether. As a primary haloalkane, it is especially prone to SN2 type reactions. It is commonly used as an alkylating agent, or in combination with magnesium metal in dry ether (Grignard reagent) to form carbon-carbon bonds. …

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Mechanism of toxicity:** 1-bromobutane reacts quickly with hepatic glutathione (GSH) leading to its rapid depletion. This can cause liver damage and has been shown to increase serum levels of alanine aminotransferase and aspartate aminotransferase. …
- **Health effects:** Hepatoxic, immunotoxic when ingested orally. Can cause lung damage and mucous membranes over extended periods/chronic exposures. …
- **Acute toxicity:** LD50: 2761 mg/kg (Oral Rat)
LC50: 237 g/m3 over 30 minutes (Inhalation, Rat)
- **Treatment:** EYES: irrigate opened eyes for several minutes under running water. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1781">T3DB T3D1781</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 109-65-9</small></p>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 08:11 | 3:01 | 0/0/0 | 0/0/0 | 0/0/0 | 63,943/1,504 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 9 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ali_2023 | irrelevant | 0 | 0 | The paper is an analytical chemistry study for hyoscine N-butyl bromide and ketoprofen, containing no toxicokinetic parameters for 1-bromobutane. |
| PGx | Genualdo_2011 | not_relevant | 0 | 0 | The paper describes the chromosomal localization of genes via FISH mapping in livestock species and does not involve 1_bromobutane, nor does it report any pharmacokinetic or pharmacodynamic data. |
| popPK | Lee_2010 | irrelevant | 2 | 1 | The study investigates immunotoxicity and GSH conjugate formation in mice, reporting only tissue concentration of a metabolite (S-butyl GSH) at specific time points without calculating kinetic parameters like half-life, clearance, or rate constants. |
| popPK | Lee_2010_2 | irrelevant | 3 | 2 | The paper focuses on hepatotoxicity mechanisms (GSH depletion, enzyme induction) and identification of metabolites, but does not report quantitative toxicokinetic parameters such as half-lives, clearance, Vmax/Km, or partition coefficients. |
| popPK | Rahman_2025 | irrelevant | 0 | 0 | The paper investigates D-pinitol's anti-emetic effects in chicks and does not mention 1-bromobutane at all. |
| popPK | de_1982 | irrelevant | 0 | 0 | The paper is a review of rectal drug administration for clinical drugs and does not mention 1_bromobutane at all. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B1_bromobutane%5D&body=Drug%3A%201_bromobutane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_1_bromobutane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
