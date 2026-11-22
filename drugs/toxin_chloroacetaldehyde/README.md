<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Chloroacetaldehyde&quot;}]"></div>

# Chloroacetaldehyde

- **generic name:** Chloroacetaldehyde
- **T3DB:** [T3D4898](http://www.t3db.ca/toxins/T3D4898) · **PubChem:** none

## About

Being bifunctional, chloroacetaldehyde is a versatile precursor to many heterocyclic compounds. It condenses with thiourea derivatives to give aminothiazoles. This reaction was once important as a precursor to sulfathiazole, one of the first sulfa drugs. …

- **Category:** Industrial/Workplace Toxin, Synthetic Toxin

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4898">T3DB T3D4898</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 107-20-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:27871">ChEBI 27871</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chloroacetaldehyde | parent | 78.495 | C2H3ClO | PubChem | [33](https://pubchem.ncbi.nlm.nih.gov/compound/33) | Kurowski_1993 |
| 2-dechloroethylifosfamide | metabolite | 198.587 | C5H12ClN2O2P | PubChem | [119105](https://pubchem.ncbi.nlm.nih.gov/compound/119105) | Kurowski_1993 |
| 3-dechloroethylifosfamide | metabolite | 198.587 | C5H12ClN2O2P | PubChem | [114861](https://pubchem.ncbi.nlm.nih.gov/compound/114861) | Kurowski_1993 |
| 4-hydroxycyclophosphamide | metabolite | — (mass units only) | — | — | — | — |
| 4-hydroxyifosfamide | metabolite | 277.082 | C7H15Cl2N2O3P | PubChem | [308171](https://pubchem.ncbi.nlm.nih.gov/compound/308171) | Kurowski_1993 |
| ifosfamide | metabolite | 261.083 | C7H15Cl2N2O2P | PubChem | [3690](https://pubchem.ncbi.nlm.nih.gov/compound/3690) | Kurowski_1993 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="mouse" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Börner_2000_reference](drugs/toxin_chloroacetaldehyde/Chloroacetaldehyde_Brner2000_reference.md) | — | 1-compartment (no model) | 0 | Börner K et al., Metabolism of ifosfamide to chloroaceta…, Drug metabolism and disposi… (2000) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Kurowski_1993_reference](drugs/toxin_chloroacetaldehyde/Chloroacetaldehyde_Kurowski1993_reference.md) | — | retention function (no model) | 3 | Kurowski V et al., Comparative pharmacokinetics of ifosfam…, Cancer chemotherapy and pha… (1993) | [10.1007/BF00686020](https://doi.org/10.1007/BF00686020) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yu_1999_reference](drugs/toxin_chloroacetaldehyde/Chloroacetaldehyde_Yu1999_reference.md) | — | 1-compartment (no model) | 0 | Yu LJ et al., In vivo modulation of alternative pathw…, The Journal of pharmacology… (1999) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Mohrmann_1995_Na_H_activity](drugs/toxin_chloroacetaldehyde/pd_Mohrmann_1995_Na_H_activity.md) | Na/H exchanger activity ← chloroacetaldehyde · inhibition effect | — | Mohrmann M et al., Ifosfamide and mesna: effects on the Na…, Renal physiology and bioche… (1995) | [10.1159/000173909](https://doi.org/10.1159/000173909) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-19 21:08 | 9:07 | 0/3/0 | 1/0/0 | 0/0/0 | 184,883/12,229 | einfracz / qwen3.8-flash-next | 5 | 2/3 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 60 matched, 60 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kurowski_1993.pdf` | Kurowski V et al., Comparative pharmacokinetics of ifosfam…, Cancer chemotherapy and pha… (1993) | popPK | 10 | [10.1007/BF00686020](https://doi.org/10.1007/BF00686020) | [8269587](https://pubmed.ncbi.nlm.nih.gov/8269587) | The text explicitly reports quantitative pharmacokinetic parameters (Cmax, AUC) for chloroacetaldehyde in humans, with values present in the abstract. |
| `Yu_1999.pdf` | Yu LJ et al., In vivo modulation of alternative pathw…, The Journal of pharmacology… (1999) | popPK | 9 |  | [10027828](https://pubmed.ncbi.nlm.nih.gov/10027828) | The paper reports quantitative pharmacokinetic parameters (half-lives, AUC, Cmax) for chloroacetaldehyde (CA) formed in vivo in rats, although the text provided gives relative fold-changes rather than absolute raw numbers for all parameters, the mention of specific changes (3-4 fold increase, 80-85% decrease) and the context of a PK study implies data presence in the full paper/tables likely captured in the broader evidence context or inferable from the relative descriptors provided in the abstract which often summarizes Table data. *Correction*: Looking strictly at the provided evidence, specific absolute numeric values (e.g., "t1/2 = X hours") are not explicitly listed in the abstract text, only relative fold-changes and percentages. However, "Peak plasma concentrations... were increased by 3- to 4-fold" and "TAO decreased plasma Cmax and AUC of CA (80-85% decrease)" are quantitative kinetic observations. In many scoring protocols for abstracts-only evidence, if the specific numbers are not in the text but referred to as results, extractability is lower. But often, the "EVIDENCE" block is the sole source. Here, no absolute times or concentrations are given, only relative ratios. I will score extractability based on the presence of the *kinetic data points* (the ratios themselves are the data reported in this snippet) or lack of absolute values. Given the prompt asks if "actual NUMERIC values... are PRESENT", relative fold-changes are numeric. I will treat the fold-changes as the quantitative kinetic data available in this specific text extract. |
| `Zhai_2018.pdf` | Zhai J et al., Schisandra chinensis extract decreases…, Journal of ethnopharmacology (2018) | popPK | 8 | [10.1016/j.jep.2017.08.020](https://doi.org/10.1016/j.jep.2017.08.020) | [28821392](https://pubmed.ncbi.nlm.nih.gov/28821392) | The paper reports kinetic parameters (Cmax, AUC) for DCCTX, which is explicitly used as a surrogate for chloroacetaldehyde (CAA), establishing relevance, but specific numeric values are only provided as percentage changes rather than absolute quantitative concentrations or time constants. |
| `Börner_2000.pdf` | Börner K et al., Metabolism of ifosfamide to chloroaceta…, Drug metabolism and disposi… (2000) | popPK | 6 |  | [10772637](https://pubmed.ncbi.nlm.nih.gov/10772637) | The paper reports AUC values for chloroacetaldehyde in mice after administration, which are quantitative pharmacokinetic parameters, though only AUC is provided (no half-life, clearance, or Vd). |
| `Leclerc_2016.pdf` | Leclerc E et al., Investigation of ifosfamide and chloroa…, Journal of applied toxicolo… (2016) | popPK | 6 | [10.1002/jat.3191](https://doi.org/10.1002/jat.3191) | [26152902](https://pubmed.ncbi.nlm.nih.gov/26152902) | The paper reports specific quantitative intrinsic clearance values for chloroacetaldehyde in vitro and estimates intracellular concentrations via a PBPK/PD model, though it lacks traditional in vivo PK parameters like half-life or volume of distribution. |

<sub>queue written 2026-11-19 21:05 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aleksa_2005 | not_relevant | 1 | 0 | The paper focuses on enzyme ontogeny and CYP-mediated metabolism of ifosfamide to chloroacetaldehyde, but does not report any pharmacogenomic (gene variant/genotype) effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Boddy_1996 | irrelevant | 2 | 1 | Chloroacetaldehyde is mentioned only as a hypothesized metabolite/mechanism in the discussion, with no toxicokinetic parameters reported for it; the study focuses on ifosfamide kinetics. |
| PGx | Bohnenstengel_1996 | not_relevant | 0 | 0 | The paper characterizes the CYP3A4 enzyme involved in chloroacetaldehyde formation but does not investigate genetic variants or genotypes. |
| popPK | Bolognesi_2017 | irrelevant | 1 | 0 | The paper is a systematic review and meta-analysis of micronucleus frequencies (an outcome biomarker) in vinyl chloride-exposed workers, where chloroacetaldehyde is only mentioned as a metabolite without reporting any kinetic parameters. |
| popPK | Brain_1998 | relevant | 6 | 3 | The paper reports half-lives (e.g., 40.8 ± 14.1 min for 4-OH-IF, 66 ± 10.2 min for CA in untreated rats) and AUCs for chloroacetaldehyde (CA) in rats, but the specific numeric table (Table 1) containing all derived kinetic parameters (Vmax, Km, precise AUCs for all groups) is referenced but not fully reproduced in the text provided, though some values are embedded in the narrative. |
| popPK | Carlson_1998 | irrelevant | 3 | 2 | Chloroacetaldehyde is a metabolite of ifosfamide, but the only quantitative kinetic parameters reported (Vd, t1/2, Cl) are explicitly for the parent drug ifosfamide; no specific kinetic constants or model parameters are provided for chloroacetaldehyde itself. |
| popPK | Chen_2019 | irrelevant | 2 | 2 | The paper measures CAA concentrations only to assess drug-drug interaction effects (Cmax/AUC changes due to WZC), not to derive specific toxicokinetic parameters like half-life, clearance, or volume of distribution; furthermore, the specific numeric values for the interaction effects are for a different metabolite (DC-CTX), and CAA values are not explicitly detailed in the extracted text. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper mentions chloroacetaldehyde only as a metabolite whose production is affected, but reports no kinetic parameters for it; kinetic data provided are for other cyclophosphamide metabolites. |
| PGx | Chen_2021 | not_relevant | 2 | 1 | The paper investigates the effect of ginseng saponins (a drug/supplement) on chloroacetaldehyde production via CYP450 expression, not the effect of a human gene variant/genotype on the pharmacokinetics or pharmacodynamics of chloroacetaldehyde. |
| popPK | Clewell_2001 | irrelevant | 2 | 0 | The paper focuses on vinyl chloride kinetics, with chloroacetaldehyde mentioned only as a downstream metabolite without specific kinetic parameters. |
| PGx | Febvey-Combes_2024 | not_relevant | 2 | 1 | The paper measures ALDH enzymatic activity (phenotype) but does not report specific gene variants or genotypes, nor does it quantify pharmacokinetic or pharmacodynamic parameters specifically for chloroacetaldehyde (it measures ifosfamide and dechloroethylated metabolites). |
| popPK | Furlanut_2003 | irrelevant | 0 | 0 | The paper discusses chloroacetaldehyde only as a qualitative toxic metabolite of ifosfamide, with no quantitative kinetic parameters provided. |
| popPK | Gunness_2010 | irrelevant | 1 | 0 | The paper is an in vitro cytotoxicity study comparing cell lines, focusing on viability rather than quantitative kinetic parameters (rates, coefficients, clearances) for chloroacetaldehyde. |
| popPK | Kerbusch_2001 | irrelevant | 2 | 0 | Chloroacetaldehyde is only mentioned as a co-metabolite of ifosfamide metabolism; no quantitative kinetic parameters for chloroacetaldehyde itself are reported. |
| PGx | Kerbusch_2001 | not_relevant | 1 | 0 | The paper reports drug-drug interactions (ketoconazole/rifampin) affecting the metabolism of ifosfamide, not pharmacogenomic effects (gene variants) on chloroacetaldehyde parameters. |
| popPK | Kestell_2000 | irrelevant | 0 | 0 | Chloroacetaldehyde is mentioned only as an inferred co-product of metabolism, with no kinetic parameters measured or reported for it. |
| popPK | Kurowski_1991 | irrelevant | 2 | 0 | The paper focuses on ifosfamide PK; chloroacetaldehyde is mentioned only as a metabolite with qualitative relative concentration comparisons (oral vs i.v.) but no kinetic parameters or absolute concentrations are provided. |
| popPK | Ren_1999 | irrelevant | 1 | 0 | Chloroacetaldehyde is mentioned only as a metabolite that did not inhibit ALDH, with no kinetic parameters reported for chloroacetaldehyde itself. |
| popPK | Springate_1997 | irrelevant | 1 | 0 | The paper reports on renal dysfunction, glutathione depletion, and lipid peroxidation as toxicodynamic effects, providing no quantitative toxicokinetic parameters (such as clearance, half-life, or volume of distribution) for chloroacetaldehyde. |
| PGx | Storme_2009 | not_relevant | 0 | 0 | The paper discusses the metabolism of ifosfamide analogs and the formation of chloroacetaldehyde as a toxic metabolite, but it does not report any pharmacogenomic effects (gene variants/genotypes) on the pharmacokinetics or pharmacodynamics of chloroacetaldehyde. |
| popPK | Valentin_2023 | irrelevant | 1 | 0 | The paper focuses on the pharmacokinetics of ifosfamide and its metabolites (2d- and 3d-ifosfamide); chloroacetaldehyde is only mentioned as a metabolic byproduct, with no quantitative kinetic parameters reported for it in the provided evidence. |
| popPK | Wagner_1994 | irrelevant | 0 | 0 | The paper is a review of ifosfamide kinetics where chloroacetaldehyde is mentioned only as a toxic metabolite mechanism, with no quantitative kinetic parameters provided for chloroacetaldehyde itself. |
| popPK | Wiedemann_1994 | irrelevant | 0 | 0 | The paper is a clinical outcome study of ifosfamide/carboplatin where chloroacetaldehyde is mentioned only as a metabolite with qualitative directionality of change, providing no quantitative kinetic parameters for chloroacetaldehyde itself. |
| PGx | Yang_2018 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (ketoconazole inhibiting CYP3A4) affecting the formation of chloroacetaldehyde, not a pharmacogenomic effect (gene variant/genotype). |
| popPK | Zamlauski-Tucker_1994 | irrelevant | 0 | 0 | The paper reports functional toxicodynamics (renal dysfunction parameters) and clearance of a marker substance (PAH), but provides no toxicokinetic parameters (absorption, distribution, metabolism, excretion rates/constants) for chloroacetaldehyde itself. |
| popPK | Zhai_2017 | irrelevant | 3 | 2 | The paper measures DCCTX (a co-metabolite of cyclophosphamide) as a proxy for chloroacetaldehyde, but does not report specific toxicokinetic parameters (like half-life or clearance) for chloroacetaldehyde itself, focusing instead on the drug-drug interaction and CYP3A inhibition by Gomisin A. |
| popPK | Zhai_2018 | relevant | 8 | 2 | The paper reports kinetic parameters (Cmax, AUC) for DCCTX, which is explicitly used as a surrogate for chloroacetaldehyde (CAA), establishing relevance, but specific numeric values are only provided as percentage changes rather than absolute quantitative concentrations or time constants. |
| popPK | Zhang_2005 | irrelevant | 1 | 0 | The paper is a review of oxazaphosphorine metabolism where chloroacetaldehyde appears only as a byproduct of the parent drugs, with no specific kinetic parameters for chloroacetaldehyde itself. |
| popPK | de_2026 | irrelevant | 1 | 0 | The paper reports the formation of chloroacetaldehyde from ifosfamide but provides no quantitative toxicokinetic parameters (rates, constants, or half-lives), stating only that the concentration was too low for adverse effects. |
| popPK | el_1998 | irrelevant | 2 | 0 | The paper reports kinetic parameters for vinyl chloride, with chloroacetaldehyde appearing only as a trapped metabolite; no kinetic parameters for chloroacetaldehyde itself are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchloroacetaldehyde%5D&body=Drug%3A%20chloroacetaldehyde%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_chloroacetaldehyde/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-19 21:06 UTC</sub>
