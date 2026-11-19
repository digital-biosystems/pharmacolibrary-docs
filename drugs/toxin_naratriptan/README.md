<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Naratriptan&quot;}]"></div>

# Naratriptan

- **generic name:** Naratriptan
- **T3DB:** [T3D2939](http://www.t3db.ca/toxins/T3D2939) · **DrugBank:** [DB00952](https://go.drugbank.com/drugs/DB00952) · **PubChem:** [CID 4440](https://pubchem.ncbi.nlm.nih.gov/compound/4440)
- **groups:** approved

## About

Naratriptan is only found in individuals that have used or taken this drug. It is a triptan drug used for the treatment of migraine headaches. It is a selective 5-hydroxytryptamine1 receptor subtype agonist.Three distinct pharmacological actions have been implicated in the antimigraine effect of the triptans: (1) stimulation of presynaptic 5-HT1D receptors, which serves to inhibit both dural vasodilation and inflammation; (2) direct inhibition of trigeminal nuclei cell excitability via 5-HT1B/1D receptor agonism in the brainstem and (3) vasoconstriction of meningeal, dural, cerebral or pial vessels as a result of vascular 5-HT1B receptor agonism.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** well absorbed (74% oral biovaility), absorption is rapid with peak plasma concentrations after 2-5 hours. The rate of absorption is slower during a migraine attack.
- **Sources and uses:** For the acute treatment of migraine attacks with or without aura in adults.
- **Mechanism of toxicity:** Three distinct pharmacological actions have been implicated in the antimigraine effect of the triptans: (1) stimulation of presynaptic 5-HT1D receptors, which serves to inhibit both dural vasodilation and inflammation; (2) direct inhibition of trigeminal nuclei cell excitability via 5-HT1B/1D receptor agonism in the brainstem and (3) vasoconstriction of meningeal, dural, cerebral or pial vessels as a result of vascular 5-HT1B receptor agonism.
- **Treatment:** There is no specific antidote to naratriptan. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2939">T3DB T3D2939</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 121679-13-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:7478">ChEBI 7478</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| naratriptan | parent | 335.466 | C17H25N3O2S | PubChem | [4440](https://pubchem.ncbi.nlm.nih.gov/compound/4440) | Christensen_2001, Duléry_1997 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Christensen_2001_reference](drugs/toxin_naratriptan/Naratriptan_Christensen2001_reference.md) | held back | 1-compartment, oral | 4 | Christensen ML et al., Pharmacokinetics of naratriptan in adol…, Journal of clinical pharmac… (2001) | [10.1177/00912700122009980](https://doi.org/10.1177/00912700122009980) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Amundsen_2021_reference](drugs/toxin_naratriptan/Naratriptan_Amundsen2021_reference.md) | — | 1-compartment (no model) | 0 | Amundsen S et al., Transfer of triptans into human breast…, Basic & clinical pharmacolo… (2021) | [10.1111/bcpt.13579](https://doi.org/10.1111/bcpt.13579) |
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Duléry_1997_reference](drugs/toxin_naratriptan/Naratriptan_Dulry1997_reference.md) | — | 1-compartment (no model) | 0 | Duléry BD et al., A method using a liquid chromatographic…, Journal of pharmaceutical a… (1997) | [10.1016/s0731-7085(96)01955-3](https://doi.org/10.1016/s0731-7085(96)01955-3) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=naratriptan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `MAOA` substrate | DrugBank actor |
| metabolism | liver | `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `MAOA` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HTR1A (target), HTR1B (target), HTR1D (target), HTR1F (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-14 07:20 | 4:11 | 1/2/0 | 0/0/0 | 0/0/0 | 108,139/16,594 | ollama / glm-5.3-flash | 4 | 0/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 38 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Christensen_2001.pdf` | Christensen ML et al., Pharmacokinetics of naratriptan in adol…, Journal of clinical pharmac… (2001) | popPK | 9 | [10.1177/00912700122009980](https://doi.org/10.1177/00912700122009980) | [11210397](https://pubmed.ncbi.nlm.nih.gov/11210397) | Direct human PK study with fully reported numeric parameters (Cmax, t1/2, AUC, Cl/F, tmax) for naratriptan in adolescents. |
| `Saito_2023.pdf` | Saito A et al., Impact of Direction of Transport on the…, Drug metabolism and disposi… (2023) | popPK | 7 | [10.1124/dmd.122.001115](https://doi.org/10.1124/dmd.122.001115) | [36669855](https://pubmed.ncbi.nlm.nih.gov/36669855) | Naratriptan is a test substrate with in vivo mouse renal secretory clearance (CLR,kidney) and in vitro uptake parameters in mMate1 KO/WT mice, but the compound-specific numeric values are not shown in the provided evidence (likely in tables/supplement not included). |
| `Adelman_2001.pdf` | Adelman JU et al., Comparative aspects of triptans in trea…, Clinical cornerstone (2001) | popPK | 6 | [10.1016/s1098-3597(01)90039-0](https://doi.org/10.1016/s1098-3597(01)90039-0) | [12739316](https://pubmed.ncbi.nlm.nih.gov/12739316) | Review of triptan PK with qualitative mention of naratriptan's long half-life, but no numeric parameter values appear in the evidence. |
| `Amundsen_2021.pdf` | Amundsen S et al., Transfer of triptans into human breast…, Basic & clinical pharmacolo… (2021) | popPK | 6 | [10.1111/bcpt.13579](https://doi.org/10.1111/bcpt.13579) | [33730376](https://pubmed.ncbi.nlm.nih.gov/33730376) | Naratriptan milk excretion with a quantitative relative infant dose (5.0%) is reported directly, though only RID is given and full kinetics (half-life, clearance) are not provided. |
| `Deleu_2000.pdf` | Deleu D et al., Current and emerging second-generation…, Journal of clinical pharmac… (2000) | popPK | 6 | [10.1177/00912700022009431](https://doi.org/10.1177/00912700022009431) | [10883409](https://pubmed.ncbi.nlm.nih.gov/10883409) | A comparative review evaluating naratriptan pharmacokinetics, but the evidence contains no numeric parameters, which likely reside in the full text/tables not provided here. |
| `Duléry_1997.pdf` | Duléry BD et al., A method using a liquid chromatographic…, Journal of pharmaceutical a… (1997) | popPK | 6 | [10.1016/s0731-7085(96)01955-3](https://doi.org/10.1016/s0731-7085(96)01955-3) | [9160269](https://pubmed.ncbi.nlm.nih.gov/9160269) | Preliminary pharmacokinetic parameters (t½, CL, bioavailability ranges) for naratriptan in rabbits are reported, though only as ranges shared across three compounds, limiting specificity. |
| `Gueorguieva_2005.pdf` | Gueorguieva I et al., Uncertainty analysis in pharmacokinetic…, Pharmaceutical research (2005) | popPK | 6 | [10.1007/s11095-005-6629-x](https://doi.org/10.1007/s11095-005-6629-x) | [16180118](https://pubmed.ncbi.nlm.nih.gov/16180118) | A population PK/PD model of naratriptan disposition is the subject, but the evidence contains no actual numeric parameter values, which likely live in figures or tables not provided. |
| `Hou_2019.pdf` | Hou M et al., Efficacy of triptans for the treatment…, European journal of clinica… (2019) | pd | 4 | [10.1007/s00228-019-02748-4](https://doi.org/10.1007/s00228-019-02748-4) | [31446449](https://www.ncbi.nlm.nih.gov/pubmed/31446449) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-11-14 07:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adelman_2001 | relevant | 6 | 1 | Review of triptan PK with qualitative mention of naratriptan's long half-life, but no numeric parameter values appear in the evidence. |
| popPK | Belvis_2014 | irrelevant | 0 | 0 | A narrative review with no quantitative kinetic parameters for naratriptan reported in the evidence. |
| popPK | Belvís_2009 | irrelevant | 1 | 0 | This is a narrative review of triptan selection in migraine therapy with no numeric kinetic parameters for naratriptan; it cites pharmacokinetics only qualitatively. |
| popPK | Brêtas_2016 | irrelevant | 0 | 0 | Naratriptan appears only as an analytical internal standard; no kinetic parameters for it are reported. |
| popPK | Deleu_2000 | relevant | 6 | 0 | A comparative review evaluating naratriptan pharmacokinetics, but the evidence contains no numeric parameters, which likely reside in the full text/tables not provided here. |
| popPK | Fox_2000 | irrelevant | 2 | 2 | An adverse-event tolerability comparison using Cmax/bioavailability only as pooled correlates, with no naratriptan-specific numeric kinetic values presented. |
| popPK | Gueorguieva_2005 | relevant | 6 | 2 | A population PK/PD model of naratriptan disposition is the subject, but the evidence contains no actual numeric parameter values, which likely live in figures or tables not provided. |
| popPK | Jhee_2001 | irrelevant | 3 | 2 | A comparative review reporting only narrative bioavailability (74%) and half-life mentions for naratriptan, repeating values from other studies with no new quantitative parameters. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | Narrative review of gepants and migraine treatment contains no gene variant/genotype effects on naratriptan PK/PD parameters. |
| popPK | Maas_2006 | irrelevant | 2 | 4 | This is a pharmacodynamic efficacy (EC50/Emax) modelling study for migraine response, not a toxicokinetic disposition study; naratriptan appears only as a comparator in PD modelling. |
| popPK | Matthaei_2016 | irrelevant | 2 | 1 | Sumatriptan is the studied substance; naratriptan appears only as a comparator substrate tested qualitatively, with no kinetic parameters reported for it. |
| PGx | Matthaei_2016 | not_relevant | 3 | 3 | Naratriptan is only shown to be an in vitro OCT1 substrate; no pharmacogenomic effect on naratriptan PK/PD is reported (only sumatriptan PK). |
| popPK | Saito_2023 | relevant | 7 | 2 | Naratriptan is a test substrate with in vivo mouse renal secretory clearance (CLR,kidney) and in vitro uptake parameters in mMate1 KO/WT mice, but the compound-specific numeric values are not shown in the provided evidence (likely in tables/supplement not included). |
| popPK | Tfelt-Hansen_2000 | irrelevant | 3 | 2 | This is a comparative review repeating other studies' values; naratriptan's half-life (~5h implied) and efficacy are mentioned but no own quantitative kinetic parameters and no numeric naratriptan half-life given. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 1 | 0 | Dose–response clinical review with efficacy/ADRs only; naratriptan appears as one of several triptans with no kinetic parameters of its own, and bioavailability values quoted are for sumatriptan/almotriptan. |
| popPK | Tfelt-Hansen_2021 | irrelevant | 3 | 1 | A mini-review with no numeric toxicokinetic parameters (no half-life, clearance, Vd, AUC) reported; kinetic values may be cited from other papers but not presented here. |
| popPK | Vishwanathan_2000 | irrelevant | 0 | 0 | Analytical method paper; naratriptan is an analyte measured in serum, with no toxicokinetic parameters (no half-life, clearance, etc.), only validation metrics. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaratriptan%5D&body=Drug%3A%20naratriptan%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_naratriptan/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-14 07:19 UTC</sub>
