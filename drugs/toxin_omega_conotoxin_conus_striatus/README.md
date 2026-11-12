<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;omega-Conotoxin (Conus striatus)&quot;}]"></div>

# omega-Conotoxin (Conus striatus)

- **generic name:** omega-Conotoxin (Conus striatus)
- **T3DB:** [T3D2656](http://www.t3db.ca/toxins/T3D2656) · **PubChem:** none

## About

Conotoxins are neurotoxic peptides from the venom of the marine cone snail (genus Conus). omega-Conotoxins inhibit N-type voltage-dependent calcium channels and have an analgesic effect.

- **Category:** Protein, Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite)
- **Sources and uses:** Conotoxins are neurotoxic peptides from the venom of the marine cone snail (genus Conus).
- **Mechanism of toxicity:** omega-Conotoxins act at presynaptic membranes, where they bind inhibit N-type voltage-dependent calcium channels.
- **Health effects:** Conotoxins are neurotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2656">T3DB T3D2656</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yan_2010_reference](drugs/toxin_omega_conotoxin_conus_striatus/OmegaConotoxinConusStriatus_Yan2010_reference.md) | — | 1-compartment (no model) | 0 | Yan LD et al., Spinal antinociception of synthetic ome…, European journal of pharmac… (2010) | [10.1016/j.ejphar.2010.03.036](https://doi.org/10.1016/j.ejphar.2010.03.036) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 14:57 | 6:44 | 0/1/0 | 0/0/0 | 0/0/0 | 184,956/5,474 | einfracz / qwen3.8-27b | 1 | 0/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 86 matched, 80 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yan_2010.pdf` | Yan LD et al., Spinal antinociception of synthetic ome…, European journal of pharmac… (2010) | popPK | 9 | [10.1016/j.ejphar.2010.03.036](https://doi.org/10.1016/j.ejphar.2010.03.036) | [20361956](https://pubmed.ncbi.nlm.nih.gov/20361956) | The paper reports a specific half-life (t1/2) of 4h for SO-3 in mice, which is a quantitative toxicokinetic parameter. |

<sub>queue written 2026-11-10 14:55 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_1993 | irrelevant | 0 | 0 | The paper studies muscarinic receptor pharmacology in rat neurons and does not report toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Boland_1990 | irrelevant | 0 | 0 | The paper studies voltage-gated calcium channel currents in rat DRG cell lines and uses omega-conotoxin GVIA as a pharmacological tool to block currents, but it does not report toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for omega-conotoxin conus striatus. |
| popPK | Cuevas_1997 | irrelevant | 0 | 0 | The paper investigates receptor pharmacology in rat neurons and uses omega-conotoxin GVIA (not striatus) as a tool compound, containing no toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| PGx | Currò_2010 | not_relevant | 0 | 0 | The paper studies the physiological mechanism of omega-conotoxin GVIA on calcium channels in rats and does not investigate pharmacogenomic variations or human PK/PD parameters. |
| popPK | Dayanithi_1995 | irrelevant | 0 | 0 | The paper focuses on omega-CTX-GVIA (a different conotoxin) and contains no kinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | De_1992 | irrelevant | 0 | 0 | The paper investigates electrophysiological effects of inositol phosphates on calcium channels in rat neurons, using omega-conotoxin only as a pharmacological tool to inhibit currents, and contains no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for omega_conotoxin_conus_striatus. |
| popPK | Kolosov_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics (pain relief) of leconotide and morphine in rats and does not report any toxicokinetic parameters (such as half-life, clearance, or volume of distribution) for omega_conotoxin_conus_striatus. |
| popPK | Manzoni_1997 | irrelevant | 0 | 0 | The paper uses omega-conotoxin-GVIA (a different conotoxin) as an analytical tool to block calcium channels, not omega_conotoxin_conus_striatus, and reports no kinetic parameters. |
| popPK | Melis_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of dopamine D4 agonists on penile erection in rats, using omega-conotoxin only as a pharmacological antagonist (N-type Ca2+ channel blocker) to characterize the mechanism, without reporting any toxicokinetic parameters (half-life, clearance, etc.) for omega-conotoxin. |
| popPK | Minshall_1994 | irrelevant | 0 | 0 | The paper studies bradykinin and ramiprilat in isolated rat cardiac tissues, using omega-conotoxin only as a tool compound to inhibit sympathetic effects, with no toxicokinetic data for the conotoxin. |
| popPK | Moriguchi_2012 | irrelevant | 0 | 0 | The paper focuses on the cognitive enhancer ST101 and uses omega-conotoxin only as a non-specific inhibitor for N-type channels, not as the subject of toxicokinetic study. |
| popPK | Reid_1998 | irrelevant | 0 | 0 | The paper investigates calcium cooperativity in transmitter release using conotoxins as channel blockers and does not report toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Sershen_1997 | irrelevant | 0 | 0 | The paper studies nicotinic receptor pharmacology and calcium channels in rat hippocampus; omega-conotoxin is mentioned only as a tool compound (antagonist) to block N-type channels, not as the subject of toxicokinetic analysis. |
| popPK | Stefani_1996 | irrelevant | 0 | 0 | The paper studies felbamate's effect on calcium channels and uses omega-conotoxin GVIA (not Conus striatus) as a tool compound to characterize channel types, reporting no kinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Stefani_1998 | irrelevant | 0 | 0 | The paper studies the pharmacology of 619C89 in rat neurons, using omega-conotoxins only as tool compounds to characterize channel subtypes, and does not report toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Succu_2008 | irrelevant | 0 | 0 | The paper investigates the neurophysiological mechanism of oxytocin-induced penile erection in rats, using omega-conotoxin GVIA (likely MVIIA) as a pharmacological tool, and does not report toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Sugiyama_1994 | irrelevant | 0 | 0 | The paper studies local anesthetics (e.g., tetracaine) on rat neurons, using omega-conotoxin as a channel subtype selector/comparator, and does not report any toxicokinetic parameters for omega-conotoxin-conus-striatus itself. |
| popPK | Tottene_1996 | irrelevant | 0 | 0 | The paper studies a different substance (omega-conotoxin MVIIC) and focuses on pharmacological channel blocking rather than toxicokinetic parameters for omega_conotoxin_conus_striatus. |
| popPK | Walday_1992 | irrelevant | 0 | 0 | The paper reports pharmacological potency (concentrations for inhibition) in an in vitro organ bath, not toxicokinetic parameters (e.g., half-life, clearance, distribution) for the substance. |
| popPK | Wanke_1994 | irrelevant | 0 | 0 | The paper studies muscarinic regulation of calcium channels in rat neurons and uses omega-conotoxin GVIA as a pharmacological tool, not omega_conotoxin_conus_striatus, and contains no toxicokinetic parameters. |
| popPK | Werth_1991 | irrelevant | 0 | 0 | The paper studies the pharmacological mechanism of action (Ca2+ channel blockade) of omega-CgTx GVIA in cells, not the toxicokinetic parameters (disposition, clearance, half-life) of omega_conotoxin_conus_striatus. |
| popPK | Williams_2008 | irrelevant | 0 | 0 | The paper is a review of ziconotide (omega-conotoxin MVIIA), which is a different conotoxin than omega-conotoxin Conus striatus. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bomega_conotoxin_conus_striatus%5D&body=Drug%3A%20omega_conotoxin_conus_striatus%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_omega_conotoxin_conus_striatus/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 14:55 UTC</sub>
