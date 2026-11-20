<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Cytochalasin A&quot;}]"></div>

# Cytochalasin A

- **generic name:** Cytochalasin A
- **T3DB:** [T3D3676](http://www.t3db.ca/toxins/T3D3676) · **PubChem:** none

## About

Cytochalasins are mycotoxins that have the ability to bind to actin filaments and block polymerization and the elongation of actin. As a result, they can change cellular morphology, inhibit cellular processes such as cell division, and cause cells to undergo apoptosis. Cytochalasins also have the ability to permeate cell membranes, prevent cellular translocation, cause cells to enucleate, and affect other aspects of biological processes unrelated to actin polymerization. …

- **Category:** Fungal Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Cytochalasin A was first isolated in the fungus Helminthosporium dermatioideum.
- **Mechanism of toxicity:** Cytochalasins are known to bind to the barbed, fast growing plus ends of microfilaments, which then blocks both the assembly and disassembly of individual actin monomers from the bound end. Once bound, cytochalasin essentially caps the end of the new actin filament. …
- **Health effects:** Major biological effects of cytochalasins include inhibition of the division of cytoplasm, reversible inhibition of cell movement, induction of nuclear extrusion, inhibition of such processes as phagocytosis, platelet aggregation and clot retraction, glucose transport, thyroid secretion, and release of growth hormone. Some cytochalasins have been shown to have developmental effects.
- **Treatment:** Consider activated charcoal after gastrointestinal absportion. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3676">T3DB T3D3676</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 14110-64-6</small></p>

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
| 2026-11-18 21:35 | 1:40 | 0/0/0 | 0/0/0 | 0/0/0 | 32,786/1,099 | einfracz / qwen3.8-flash-next | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goldoni_1998 | irrelevant | 0 | 0 | The paper reports on biological effects of cytochalasin A on bacterial infection in HeLa cells with no quantitative toxicokinetic parameters or disposition data reported. |
| popPK | Lingham_1992 | irrelevant | 0 | 0 | The paper focuses on HIV-1 protease inhibition kinetics (IC50, Ki) for a novel cytochalasin, with cytochalasin A mentioned only for comparison; no toxicokinetic parameters are reported. |
| popPK | Lipski_1987 | irrelevant | 2 | 0 | The paper reports pharmacokinetics for Cytochalasin B, not Cytochalasin A, explicitly noting that Cytochalasin A is fixed to tissues and not extractable, thus providing no kinetic parameters for the target substance. |
| popPK | Mookerjee_1982 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| popPK | Tanenbaum_1982 | irrelevant | 0 | 0 | The paper reports pharmacodynamic potency (ID50) in an in vitro cell extract model, not quantitative toxicokinetic parameters such as half-lives, clearance, or volume of distribution. |
| popPK | Teti_1981 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects on lymphocyte capping and does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Trendowski_2014 | irrelevant | 2 | 0 | The paper reports LD50 and tolerance doses (pharmacodynamics/acutetoxicity) in zebrafish but provides no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for cytochalasin_a. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcytochalasin_a%5D&body=Drug%3A%20cytochalasin_a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cytochalasin_a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
