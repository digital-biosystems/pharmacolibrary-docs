<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Household toxins&quot;,&quot;href&quot;:&quot;toxins/HOUS.md&quot;},{&quot;label&quot;:&quot;Imidazolidinyl urea&quot;}]"></div>

# Imidazolidinyl urea

- **generic name:** Imidazolidinyl urea
- **T3DB:** [T3D3625](http://www.t3db.ca/toxins/T3D3625) · **PubChem:** [CID 38258](https://pubchem.ncbi.nlm.nih.gov/compound/38258)
- **groups:** approved

## About

Imidazolidinyl urea is an antimicrobial preservative used in cosmetics. It acts as a formaldehyde releaser. Imidazolidinyl urea may cause contact dermatitis. …

- **Category:** Household Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Imidazolidinyl urea is an antimicrobial preservative used in cosmetics.
- **Mechanism of toxicity:** Imidazolidinyl urea is a formaldehyde releaser. It is likely that formaldehyde toxicity occurs when intracellular levels saturate formaldehyde dehydrogenase activity, allowing the unmetabolized intact molecule to exert its effects. …
- **Health effects:** Imidazolidinyl urea releases formaldehyde, a known human carcinogen. It may also react to produce nitrosamines, which are believed to be carcinogenic.
- **Carcinogenicity:** IARC group 1, carcinogenic to humans (for formaldehyde).

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3625">T3DB T3D3625</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 39236-46-9</small></p>

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
| 2026-11-19 09:36 | 3:57 | 0/0/0 | 0/0/0 | 0/0/0 | 23,018/1,664 | einfracz / qwen3.8-flash-next | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agner_2001 | irrelevant | 0 | 0 | The paper is a clinical standardization study for patch test concentrations and reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Ahmad_2024 | irrelevant | 1 | 1 | The paper focuses on in silico molecular docking and MD simulations for drug-target binding affinity, not toxicokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| PGx | Ahmad_2024 | not_relevant | 0 | 0 | The paper describes computational docking, molecular dynamics, and in vitro inhibition assays for imidurea, but does not report any pharmacogenomic effects (gene variants impacting PK/PD parameters). |
| popPK | Ahmad_2025 | irrelevant | 0 | 0 | The paper focuses on computational docking, molecular dynamics, and in vitro MTT assays for anticancer activity, reporting no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| PGx | Ahmad_2025 | not_relevant | 0 | 0 | The paper reports computational docking, molecular dynamics simulations, and in vitro cytotoxicity assays, but does not investigate pharmacogenomic effects (gene variants) on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Draijer_2002 | irrelevant | 0 | 0 | The paper concerns the hypolipidemic agent HOE 402 and its effect on cholesterol in mice; imidazolidinyl_urea is not studied as a subject substance, and no toxicokinetic parameters are reported. |
| popPK | Hoffmann_1996 | irrelevant | 0 | 0 | The paper studies the hypolipidemic agent HOE 402 (which contains an imidazolidinyl moiety in its name but is a distinct pyrimidine derivative) and does not report toxicokinetic parameters for imidazolidinyl urea. |
| popPK | Vagenende_2013 | irrelevant | 0 | 0 | The paper discusses using allantoin (a metabolite/related compound) as a laboratory adsorbent for endotoxins, with no toxicokinetic parameters or disposition data for imidazolidinyl urea. |
| popPK | Ziegler_1988 | irrelevant | 0 | 0 | no_text gate: only 64 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bimidazolidinyl_urea%5D&body=Drug%3A%20imidazolidinyl_urea%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_imidazolidinyl_urea/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
