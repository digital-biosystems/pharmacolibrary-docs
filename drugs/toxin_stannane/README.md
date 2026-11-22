<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Stannane&quot;}]"></div>

# Stannane

- **generic name:** Stannane
- **T3DB:** [T3D1265](http://www.t3db.ca/toxins/T3D1265) · **PubChem:** [CID 123161](https://pubchem.ncbi.nlm.nih.gov/compound/123161)

## About

Stannane is a chemical compound of tin. Tin is a chemical element with the symbol Sn and atomic number 50. It is a natural component of the earth's crust and is obtained chiefly from the mineral cassiterite, where it occurs as tin dioxide.

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Mechanism of toxicity:** Inorganic and organic tin compounds are weak inhibitors of alcohol dehydrogenase.
- **Health effects:** Ingestion of large amounts of inorganic tin compounds can cause stomachache, anemia, and liver and kidney problems.
- **Treatment:** EYES: irrigate opened eyes for several minutes under running water. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1265">T3DB T3D1265</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 2406-52-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:30419">ChEBI 30419</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by qwen3.8-flash-next, p(non-human) 0.00).">human + animal</span> | [Coco_2019_Viability](drugs/toxin_stannane/pd_Coco_2019_Viability.md) | cell viability ← bromotributyl stannane · inhibition effect | — | Coco RM et al., Acute retinal toxicity associated with…, The British journal of opht… (2019) | [10.1136/bjophthalmol-2017-311471](https://doi.org/10.1136/bjophthalmol-2017-311471) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 15:48 | 4:59 | 0/0/0 | 0/1/0 | 0/0/0 | 46,073/1,408 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Coco_2019 | irrelevant | 0 | 0 | Stannane is not the subject; bromotributyl stannane is mentioned only as a contaminant detected via GC-MS in a toxicological case study about retinal damage from perfluorocarbons, with no kinetic parameters reported. |
| popPK | García-Vázquez_2021 | irrelevant | 0 | 0 | Stannane is used solely as a chemical precursor/reagent for radiolabeling, not as the toxicological subject; the reported half-life belongs to the radionuclide Fluorine-18. |
| popPK | Schwede_1994 | irrelevant | 0 | 0 | The paper is a synthetic chemistry study on antiprogestins where stannane is used only as a chemical reagent for palladium-catalyzed coupling, with no toxicokinetic data reported. |
| popPK | Takamura_2024 | irrelevant | 0 | 0 | The paper is a synthetic organic chemistry study on scabrolide F, where stannane is merely a reagent name ("allylic stannane") with no toxicokinetic parameters reported. |
| popPK | Taldone_2016 | irrelevant | 0 | 0 | Stannane is used merely as a synthetic precursor (Boc-protected stannane) in a chemical synthesis and is not the subject of any toxicokinetic investigation or parameter reporting. |
| popPK | Wilbur_2004 | irrelevant | 0 | 0 | Stannane moieties are merely chemical precursors for radiolabeling biotin derivatives, not the subject of toxicokinetic studies; the paper focuses on biotin derivative distribution. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bstannane%5D&body=Drug%3A%20stannane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_stannane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
