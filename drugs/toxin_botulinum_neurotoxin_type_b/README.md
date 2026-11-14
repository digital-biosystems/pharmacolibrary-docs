<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Botulinum neurotoxin type B&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;BotulinumNeurotoxinTypeB_Guptill2021_reference&quot;,&quot;label&quot;:&quot;Guptill_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_botulinum_neurotoxin_type_b/BotulinumNeurotoxinTypeB_Guptill2021_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Botulinum neurotoxin type B

- **generic name:** Botulinum neurotoxin type B
- **T3DB:** [T3D3125](http://www.t3db.ca/toxins/T3D3125) · **PubChem:** none

## About

Botulinum toxin is a neurotoxic protein produced by the bacterium Clostridium botulinum. Though it is the most toxic protein known, it may be used in minute doses to treat muscle spasms and in cosmetic treatment, under the brand name Botox.

- **Category:** Protein, Bacterial Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation, dermal
- **Sources and uses:** Botulinum toxin is a neurotoxic protein produced by the bacterium Clostridium botulinum. Though it is the most toxic protein known, it may be used in minute doses to treat muscle spasms and in cosmetic treatment, under the brand name Botox.
- **Mechanism of toxicity:** Botulinum toxin is a two-chain polypeptide with a 100-kDa heavy chain joined by a disulfide bond to a 50-kDa light chain. Following the attachment of the toxin heavy chain to proteins on the surface of axon terminals, the toxin can be taken into neurons by endocytosis. …
- **Health effects:** Botulinum toxin is an extremely potent neurotoxin that causes paralysis. Death may result from respiratory failure following paralysis of the respiratory muscles.
- **Acute toxicity:** LD50: 1.2 ng/mg (Intraperitoneal, Mouse)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3125">T3DB T3D3125</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

## Start here

> **Guptill_2021_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/toxin_botulinum_neurotoxin_type_b/BotulinumNeurotoxinTypeB_Guptill2021_reference.md?tab=Simulation) · [record](drugs/toxin_botulinum_neurotoxin_type_b/BotulinumNeurotoxinTypeB_Guptill2021_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.01</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">0.1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Cheng_2015 · CL ·/kg</text><circle cx="286.8" cy="30.0" r="4" fill="#ef6c00"><title>Cheng_2015 · CL ·/kg: 0.0189 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Guptill_2021 · CL ·/kg</text><circle cx="286.8" cy="46.0" r="4" fill="#2e7d32"><title>Guptill_2021 · CL ·/kg: 0.0189 L/h</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. ·/kg: given per kg in the paper, shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Guptill_2021_reference](drugs/toxin_botulinum_neurotoxin_type_b/BotulinumNeurotoxinTypeB_Guptill2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Guptill JT et al., Safety, Tolerability, and Pharmacokinet…, Antimicrobial agents and ch… (2021) | [10.1128/AAC.02329-20](https://doi.org/10.1128/AAC.02329-20) |
| <span class="pk-rf" hidden data-species="mouse" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: disposition incomplete — retention function missing A1, A2 — TK_Retention canno…</sub> | [Cheng_2015_reference](drugs/toxin_botulinum_neurotoxin_type_b/BotulinumNeurotoxinTypeB_Cheng2015_reference.md) | held back | retention, 2 pools | 3 | Cheng LW et al., Use of Monoclonal Antibodies in the Sen…, Toxins (2015) | [10.3390/toxins7124863](https://doi.org/10.3390/toxins7124863) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 03:58 | 17:57 | 2/0/0 | 0/0/0 | 0/0/0 | 369,757/17,032 | einfracz / qwen3.8-27b | 20 | 0/7 | 20/0 | 0 |

## Coverage

- **PubMed hits:** 54 matched, 54 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Davis_2026 | irrelevant | 0 | 0 | The paper describes the manufacturing (co-expression and purification) of monoclonal antibody antitoxins for botulinum neurotoxin type B, not the toxicokinetic parameters of the toxin itself. |
| PGx | Dolimbek_2012 | not_relevant | 0 | 0 | The paper describes the structural biology and synaptosome binding regions of botulinum neurotoxin B, not pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Guptill_2021 | irrelevant | 1 | 1 | The quantitative kinetic parameters (half-life, clearance, Vd) reported are for the monoclonal antibody therapeutic NTM-1632, not for botulinum neurotoxin type B itself. |
| popPK | James_2022 | irrelevant | 0 | 0 | This is a clinical review of treatment efficacy for sialorrhea in ALS, reporting clinical outcomes rather than quantitative toxicokinetic parameters (half-life, clearance, etc.) for botulinum toxin type B. |
| PGx | Pan_2026 | not_relevant | 0 | 0 | The paper reports on engineered chimeric botulinum toxins, not human pharmacogenomic variants or genotypes affecting drug response. |
| popPK | Simsom_2026 | irrelevant | 0 | 10 | The paper reports pharmacokinetic parameters for a monoclonal antibody (1B18 mAb) used as a therapeutic, not for the toxicokinetics of the subject substance, botulinum neurotoxin type B. |
| popPK | Tomic_2019 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of monoclonal antibody treatments (NTM-1631/1632) and the protective efficacy of the antibodies, not the toxicokinetic parameters (half-life, clearance, distribution) of botulinum neurotoxin type B itself. |
| popPK | Tomic_2021 | irrelevant | 1 | 9 | The paper reports pharmacokinetic parameters for monoclonal antibodies (mAbs) targeting botulinum neurotoxin, not for the neurotoxin itself. |
| popPK | Young_2011 | irrelevant | 0 | 0 | The paper is a systematic review of clinical outcomes for treating sialorrhea, reporting no quantitative toxicokinetic parameters (e.g., half-life, clearance) for botulinum toxin type B. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbotulinum_neurotoxin_type_b%5D&body=Drug%3A%20botulinum_neurotoxin_type_b%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_botulinum_neurotoxin_type_b/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 03:54 UTC</sub>
