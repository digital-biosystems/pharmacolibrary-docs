<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;adefovir dipivoxil&quot;}]"></div>

# adefovir dipivoxil

- **generic name:** adefovir dipivoxil
- **ATC codes:** `J05AF08`
- **DrugBank:** [DB00718](https://go.drugbank.com/drugs/DB00718) · **PubChem:** [CID 60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871)
- **molar mass:** 501.4705 g/mol (C20H32N5O8P) — DrugBank
- **groups:** approved

## About

Adefovir dipivoxil is a nucleoside analog reverse transcriptase inhibitor used to treat chronic hepatitis B. It is administered orally in tablet form. The drug is currently approved, although one specific product was withdrawn in the European Union.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q28851735](https://www.wikidata.org/wiki/Q28851735), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| adefovir dipivoxil | parent | 501.471 | C20H32N5O8P | DrugBank | [60871](https://pubchem.ncbi.nlm.nih.gov/compound/60871) | Dong_2024 |
| adefovir | metabolite | 273.189 | C8H12N5O4P | PubChem | [60172](https://pubchem.ncbi.nlm.nih.gov/compound/60172) | Dong_2024 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Dong_2024_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Dong2024_reference.md) | — | 1-compartment (no model) | 7 | Dong Q et al., Understanding adefovir pharmacokinetics…, European journal of clinica… (2024) | [10.1007/s00228-024-03673-x](https://doi.org/10.1007/s00228-024-03673-x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Huang_2014_reference](drugs/drug_adefovir_dipivoxil/AdefovirDipivoxil_Huang2014_reference.md) | — | 1-compartment (no model) | 0 | Huang J et al., Population pharmacokinetics of adefovir…, International journal of cl… (2014) | [10.5414/CP201928](https://doi.org/10.5414/CP201928) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Liu_2014_HBV_DNA](drugs/drug_adefovir_dipivoxil/pd_Liu_2014_HBV_DNA.md) | intracellular HBV replicative intermediates ← adefovir · direct sigmoid Emax (Hill) effect | — | Liu Y et al., rtM204Q may serve as a novel lamivudine…, PloS one (2014) | [10.1371/journal.pone.0089015](https://doi.org/10.1371/journal.pone.0089015) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:24 | 0:04 | 0/2/0 | 1/0/0 | 0/0/0 | 4,259/163 | einfracz / qwen3.8-27b | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fu_2007 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study of new PMEA prodrugs, and adefovir dipivoxil is only used as a control; no quantitative PK parameters for adefovir dipivoxil are reported. |
| PGx | Fu_2007 | not_relevant | 0 | 0 | The paper reports on the synthesis and in vitro activity of new PMEA prodrugs, not on pharmacogenomic effects on adefovir dipivoxil. |
| popPK | Fu_2008 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro antiviral activity (anti-HBV) of new prodrugs, with no pharmacokinetic parameters reported for adefovir dipivoxil. |
| PGx | Fu_2008 | not_relevant | 0 | 0 | The paper reports the design and synthesis of prodrugs and their in vitro anti-HBV activity, but does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Huang_2014 | not_relevant | 0 | 0 | The paper reports population pharmacokinetics in healthy volunteers but does not investigate or report on the effects of specific gene variants or genotypes on PK parameters. |
| popPK | Lee_2014 | irrelevant | 0 | 0 | The study focuses on renal safety and efficacy (eGFR, HBV DNA) of combination therapy, reporting no pharmacokinetic parameters like clearance or volume of distribution for adefovir. |
| PGx | Lee_2014 | not_relevant | 0 | 0 | The study investigates the clinical outcome (renal function) of drug combination therapy but contains no genetic or pharmacogenomic data regarding adefovir dipivoxil. |
| popPK | Li_2019 | irrelevant | 2 | 0 | The study focuses on the synthesis and mechanistic evaluation of adefovir derivatives, and while it mentions pharmacokinetic characterization, no specific quantitative PK parameter values (CL, V, ka, etc.) for adefovir dipivoxil or the derivatives are present in the provided evidence. |
| PGx | Li_2019 | not_relevant | 0 | 0 | The paper reports on new chemical derivatives and general PK/toxicity comparisons, not on the impact of specific human genetic variants on the PK/PD of adefovir dipivoxil. |
| popPK | Liu_2014 | irrelevant | 0 | 0 | This is an HBV drug-resistance study; adefovir dipivoxil is only a rescue therapy/comparator with EC50 susceptibility data, no PK disposition parameters. |
| popPK | Liu_2015 | irrelevant | 0 | 0 | The paper focuses on viral resistance mechanisms (EC50) and genotypic analysis of HBV mutants, not the pharmacokinetic disposition parameters (CL, V, t1/2) of adefovir dipivoxil in a biological host. |
| popPK | Pfister_2002 | irrelevant | 0 | 0 | The study is a pharmacokinetic analysis of amprenavir (subject drug), and adefovir dipivoxil is only a co-administered background medication. |
| PGx | Pfister_2002 | not_relevant | 0 | 0 | The paper investigates pharmacokinetic drug-drug interactions for amprenavir; adefovir is only a background medication and no genetic effects are reported. |
| popPK | Pfister_2003 | irrelevant | 0 | 0 | The study models the pharmacokinetics of efavirenz, nelfinavir, and indinavir, not adefovir dipivoxil, which is only a background component of the treatment regimen. |
| PGx | Pfister_2003 | not_relevant | 0 | 0 | The paper reports population PK of efavirenz and protease inhibitors but contains no pharmacogenomic data or PK/PD parameters for adefovir dipivoxil. |
| popPK | Qi_2012 | irrelevant | 0 | 0 | The paper is an in vitro antiviral activity study of a novel compound where adefovir is only used as a positive control, and no pharmacokinetic parameters for adefovir are reported. |
| PGx | Qi_2012 | not_relevant | 0 | 0 | The paper reports in vitro anti-viral activity of a titanium-substituted heteropolytungstate and compares it to adefovir dipivoxil, but does not investigate any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Su_2018 | irrelevant | 0 | 0 | This is a renal-safety (eGFR) trial of adefovir dipivoxil plus PEG-IFN; no PK disposition parameters (CL, V, ka, half-life, or PK model) for adefovir are reported. |
| popPK | Svarovskaia_2013 | irrelevant | 0 | 0 | The study focuses on viral load decline kinetics and resistance mutations, not pharmacokinetic parameters like clearance or volume. |
| PGx | Svarovskaia_2013 | not_relevant | 0 | 0 | The paper studies the impact of a viral mutation (rtN236T) on the efficacy of tenofovir, not the impact of a human gene variant on the PK or PD of adefovir dipivoxil. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Badefovir_dipivoxil%5D&body=Drug%3A%20adefovir_dipivoxil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_adefovir_dipivoxil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:23 UTC</sub>
