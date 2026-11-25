<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;piracetam&quot;}]"></div>

# piracetam

- **generic name:** piracetam
- **ATC codes:** `N06BX03`
- **DrugBank:** [DB09210](https://go.drugbank.com/drugs/DB09210) · **PubChem:** none
- **molar mass:** 142.1558 g/mol (C6H10N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Piracetam is a nootropic agent in the racetam class prescribed for cognitive issues, dizziness, and specific movement disorders. It is typically taken by mouth, while injectable forms are available for administration through veins or into muscle. The medication is commercially available across various European markets but lacks authorization for general use in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q410069](https://www.wikidata.org/wiki/Q410069), [Wikipedia](https://en.wikipedia.org/wiki/Piracetam?oldid=1367146418) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| piracetam | parent | 142.156 | C6H10N2O2 | DrugBank | — | Barkat_2014 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Barkat_2014_reference](drugs/drug_piracetam/Piracetam_Barkat2014_reference.md) | — | 1-compartment (no model) | 7 | Barkat K et al., Development of a simple chromatographic…, Drug research (2014) | [10.1055/s-0033-1363248](https://doi.org/10.1055/s-0033-1363248) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Bravo-Martínez_2012_Ca_V_2_2](drugs/drug_piracetam/pd_Bravo_Mart_nez_2012_Ca_V_2_2.md) | Ca V 2.2 current ← piracetam · direct sigmoid Emax (Hill) effect | — | Bravo-Martínez J et al., A novel CaV2.2 channel inhibition by pi…, Experimental biology and me… (2012) | [10.1258/ebm.2012.012128](https://doi.org/10.1258/ebm.2012.012128) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chayrov_2022_cell_viability](drugs/drug_piracetam/pd_Chayrov_2022_cell_viability.md) | Cell viability of copper-injured APPswe cells ← piracetam-memantine · stimulation effect | — | Chayrov R et al., Synthesis, Neuroprotective Effect and P…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15091108](https://doi.org/10.3390/ph15091108) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:49 | 0:04 | 0/1/0 | 2/0/0 | 0/0/0 | 4,165/175 | einfracz / qwen3.8-27b | 3 | 1/2 | 2/1 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abikhalil_1986 | relevant | 8 | 0 | The study describes the pharmacokinetics of piracetam using a compartmental model algorithm, but no specific numeric parameter values are provided in the evidence text. |
| PGx | Abikhalil_1986 | not_relevant | 0 | 0 | The paper describes a new computational algorithm for pharmacokinetic parameter estimation using Piracetam as a test case, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Barkat_2014 | not_relevant | 0 | 0 | The study evaluates the pharmacokinetics of piracetam in healthy volunteers but does not report any data on gene variants, genotypes, or phenotypes. |
| popPK | Bravo-Martínez_2012 | irrelevant | 0 | 0 | This is an in vitro electrophysiological study of piracetam's mechanism of action on calcium channels, containing no pharmacokinetic parameters. |
| PGx | Bravo-Martínez_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of piracetam on calcium channels in cell culture, reporting no pharmacogenomic effects or human PK/PD data. |
| popPK | Chayrov_2022 | irrelevant | 0 | 0 | This is a synthesis/neuroprotection/solubility study of memantine conjugates; piracetam is only a chemical moiety, with no PK parameters reported. |
| popPK | Inozemtsev_2007 | irrelevant | 0 | 0 | The paper describes a behavioral pharmacology study (passive avoidance learning) and does not report any pharmacokinetic parameters for piracetam. |
| PGx | Inozemtsev_2007 | not_relevant | 0 | 0 | The paper describes a behavioral pharmacology study of piracetam in rats and does not report any genetic variants or pharmacogenomic interactions affecting PK or PD parameters. |
| popPK | Kaneko_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA channel function in Xenopus oocytes and does not report pharmacokinetic parameters for piracetam. |
| PGx | Kaneko_1991 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of piracetam on NMDA receptors in Xenopus oocytes and does not report any gene variants or genotypes affecting its pharmacokinetics or pharmacodynamics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpiracetam%5D&body=Drug%3A%20piracetam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_piracetam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 02:48 UTC</sub>
