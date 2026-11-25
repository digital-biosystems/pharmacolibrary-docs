<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08D&quot;,&quot;href&quot;:&quot;atc/V08D.md&quot;},{&quot;label&quot;:&quot;perflubutane, phospholipid microspheres&quot;}]"></div>

# perflubutane, phospholipid microspheres

- **generic name:** perflubutane, phospholipid microspheres
- **ATC codes:** `V08DA06`
- **DrugBank:** none · **PubChem:** none
- **groups:** not captured

## About

Perflubutane phospholipid microspheres are an ultrasound contrast medium.

<small>⚠️ **Unverified** — written by `qwen3.8-27b` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Landmark_2008_reference](drugs/drug_perflubutane_phospholipid_microspheres/PerflubutanePhospholipidMicrospheres_Landmark2008_reference.md) | — | 1-compartment (no model) | 0 | Landmark KE et al., Pharmacokinetics of perfluorobutane fol…, Ultrasound in medicine & bi… (2008) | [10.1016/j.ultrasmedbio.2007.09.019](https://doi.org/10.1016/j.ultrasmedbio.2007.09.019) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:45 | 0:03 | 0/1/0 | 0/0/0 | 0/0/0 | 4,137/191 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 15 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bijland_2011 | irrelevant | 0 | 0 | The study focuses on the metabolic effects of perfluoroalkyl sulfonates (PFAS) in mice, not the pharmacokinetics of perflubutane phospholipid microspheres. |
| PGx | Bijland_2011 | not_relevant | 0 | 0 | The paper investigates the toxicity of PFAS surfactants on lipoprotein metabolism in mice, not the pharmacokinetics or pharmacodynamics of perflubutane phospholipid microspheres. |
| popPK | Dixon_2013 | irrelevant | 0 | 0 | The study investigates the delivery of a model drug (calcein) using microbubbles in an in vitro flow chamber system, not the population pharmacokinetics of perflubutane phospholipid microspheres. |
| PGx | Dixon_2013 | not_relevant | 0 | 0 | The paper describes microbubble technology for drug delivery and does not investigate any genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of perflubutane phospholipid microspheres. |
| popPK | Kindberg_2003 | irrelevant | 1 | 0 | The study is a qualitative mechanistic investigation of cellular uptake (Kupffer cells) via electron microscopy, and it does not report quantitative pharmacokinetic parameters (such as clearance, volume, or half-life) for the drug. |
| PGx | Kindberg_2003 | not_relevant | 0 | 0 | The paper describes the hepatic clearance of an ultrasound contrast agent in rats without mentioning any pharmacogenomic or genetic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Landmark_2008 | not_relevant | 0 | 0 | The paper reports pharmacokinetics of perfluorobutane in healthy volunteers vs. patients with reduced pulmonary diffusing capacity, but does not investigate gene variants or genotypes. |
| popPK | Lau_2020 | irrelevant | 0 | 0 | The study is about Perfluorobutane Sulfonate (PFBS), not perflubutane phospholipid microspheres. |
| PGx | Lau_2020 | not_relevant | 0 | 0 | The paper studies the pharmacokinetics of perfluorobutane sulfonate (PFBS), an environmental chemical, not the drug perflubutane phospholipid microspheres, and it does not report gene-based effects. |
| popPK | Li_2017 | irrelevant | 0 | 0 | The study analyzes perfluorobutane (the gas in Sonazoid microbubbles), not perflubutane phospholipid microspheres, which are distinct drug substances. |
| PGx | Li_2017 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics in healthy volunteers and compares ethnic groups (Chinese vs. Caucasian) but does not analyze specific gene variants or genotypes. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The paper describes an mRNA delivery strategy using exosomes and ultrasound contrast agents, not the pharmacokinetics of perflubutane phospholipid microspheres. |
| PGx | Li_2026 | not_relevant | 0 | 0 | The paper discusses mRNA delivery for familial hypercholesterolemia using exosomes and the ultrasound contrast agent Sonazoid, with no mention of perflubutane phospholipid microspheres or pharmacogenomic effects on its PK/PD parameters. |
| popPK | Melich_2024 | irrelevant | 3 | 2 | The study focuses on the characterization of perfluorobutane nanodroplets (contrast agents) and reports qualitative half-life variations rather than quantitative compartmental PK parameters (CL, V) for a therapeutic drug. |
| PGx | Melich_2024 | not_relevant | 0 | 0 | The paper describes the physicochemical and pharmacokinetic behavior of perfluorobutane nanodroplets but contains no pharmacogenomic analysis or data on gene variants. |
| popPK | Zhao_2015 | irrelevant | 0 | 0 | The study investigates the transporter kinetics of perfluorinated sulfonates (PFASs) in vitro, which is a different class of compounds from the subject drug perflubutane. |
| PGx | Zhao_2015 | not_relevant | 0 | 0 | The paper discusses perfluorooctane sulfonate (PFOS) and other perfluoroalkyl sulfonates, not perflubutane phospholipid microspheres, and does not report pharmacogenomic effects on PK/PD parameters for the target drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bperflubutane_phospholipid_microspheres%5D&body=Drug%3A%20perflubutane_phospholipid_microspheres%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_perflubutane_phospholipid_microspheres/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:41 UTC</sub>
