<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;Dicumarol&quot;}]"></div>

# Dicumarol

- **generic name:** Dicumarol
- **T3DB:** [T3D3735](http://www.t3db.ca/toxins/T3D3735) · **DrugBank:** [DB00266](https://go.drugbank.com/drugs/DB00266) · **PubChem:** [CID 54676038](https://pubchem.ncbi.nlm.nih.gov/compound/54676038)
- **groups:** approved

## About

Dicumarol is only found in individuals that have used or taken this drug. It is an oral anticoagulant that interferes with the metabolism of vitamin K. It is also used in biochemical experiments as an inhibitor of reductases. [PubChem] Dicumarol inhibits vitamin K reductase, resulting in depletion of the reduced form of vitamin K (vitamin KH2). …

- **Category:** Drug, Fungal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** oral, dermal, inhalation, and parenteral (contaminated drugs).
- **Sources and uses:** Dicoumarol is a mycotoxin of combined plant and fungal origin. It is a derivative of coumarin, a substance made by plants which is transformed in mouldy feeds by a number of species of fungi into active dicoumarol. …
- **Mechanism of toxicity:** Dicoumarol is an anticoagulant that competitively inhibits vitamin K, preventing the formation of prothrombin. It does this by inhibiting the enzyme NAD(P)H:quinone oxidoreductase-1, which is required for the reduction of vitamin K to its hydroquinone. …
- **Health effects:** Dicoumarol is an anticoagulant.
- **Lethal dose:** LD50: 233 mg/kg (Oral, Mouse)
- **Acute toxicity:** LD<sub>50</sub>=233 mg/kg (orally in mice)
LD<sub>50</sub>=250 mg/kg (orally in rats)
- **Treatment:** Administration of Vitamin K is the antidote for dicoumarol toxicity.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3735">T3DB T3D3735</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 66-76-2 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:4513">ChEBI 4513</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dicumarol | parent | 336.299 | C19H12O6 | PubChem | [54676038](https://pubchem.ncbi.nlm.nih.gov/compound/54676038) | Lai_1977, Lai_1978 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Lai_1978_reference](drugs/toxin_dicumarol/Dicumarol_Lai1978_reference.md) | held back | 1-compartment, IV | 1 | Lai CM et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1978) | [10.1002/jps.2600670316](https://doi.org/10.1002/jps.2600670316) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lai_1977_reference](drugs/toxin_dicumarol/Dicumarol_Lai1977_reference.md) | — | 1-compartment (no model) | 0 | Lai CM et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600661221](https://doi.org/10.1002/jps.2600661221) |
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Yacobi_1977_2_reference](drugs/toxin_dicumarol/Dicumarol_Yacobi1977v2_reference.md) | — | 1-compartment (no model) | 0 | Yacobi A et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600661222](https://doi.org/10.1002/jps.2600661222) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-18 21:45 | 5:08 | 1/2/0 | 0/0/0 | 0/0/0 | 116,269/5,248 | einfracz / qwen3.8-flash-next | 6 | 0/4 | 6/0 | 0 |

## Coverage

- **PubMed hits:** 55 matched, 55 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_7 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yacobi_1977_2.pdf` | Yacobi A et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1977) | popPK | 10 | [10.1002/jps.2600661222](https://doi.org/10.1002/jps.2600661222) | [72819](https://pubmed.ncbi.nlm.nih.gov/72819) | The paper provides quantitative distribution kinetic parameters (coefficients P, A, B and rate constants pi, alpha, beta) and free fraction values for dicumarol in rats, describing its multi-exponential plasma decline. |
| `Lai_1977.pdf` | Lai CM et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1977) | popPK | 9 | [10.1002/jps.2600661221](https://doi.org/10.1002/jps.2600661221) | [72818](https://pubmed.ncbi.nlm.nih.gov/72818) | The paper reports quantitative total clearance and serum free fraction values for dicumarol in rats. |
| `Lai_1978.pdf` | Lai CM et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1978) | popPK | 9 | [10.1002/jps.2600670316](https://doi.org/10.1002/jps.2600670316) | [76673](https://pubmed.ncbi.nlm.nih.gov/76673) | The paper reports quantitative total clearance values for dicumarol in rats. |
| `Wingard_1975.pdf` | Wingard LB et al., Effect of bilirubin on the distribution…, Proceedings of the Society… (1975) | popPK | 9 | [10.3181/00379727-148-38547](https://doi.org/10.3181/00379727-148-38547) | [47634](https://pubmed.ncbi.nlm.nih.gov/47634) | The paper reports kinetic parameters for dicumarol in rats, but specific numeric values for volume of distribution and elimination rates are not present in the provided evidence snippet. |
| `Yacobi_1975.pdf` | Yacobi A et al., Comparative pharmacokinetics of coumari…, Journal of pharmaceutical s… (1975) | popPK | 9 | [10.1002/jps.2600641220](https://doi.org/10.1002/jps.2600641220) | [54415](https://pubmed.ncbi.nlm.nih.gov/54415) | The paper reports biological half-lives and ratios for dicumarol in rats, but specific numeric values are limited to ranges and ratios without detailed parameter tables in the text. |
| `Gross_1986.pdf` | Gross DR et al., Pharmacodynamics and pharmacokinetics o…, American journal of veterin… (1986) | popPK | 8 |  | [2429595](https://pubmed.ncbi.nlm.nih.gov/2429595) | The paper reports pharmacokinetic studies on dicumarol (bishydroxycoumarin) in goats, but the provided text only gives qualitative trends (plateau time, lag time) without specific numeric parameters like half-life, Vd, or clearance in the visible evidence. |
| `Hulse_1981.pdf` | Hulse M et al., Effect of blood sampling schedules on p…, The Journal of pharmacology… (1981) | popPK | 6 |  | [6166741](https://pubmed.ncbi.nlm.nih.gov/6166741) | The paper investigates the effect of sampling on dicumarol kinetics and confirms pharmacokinetic changes occurred, but specific numeric kinetic parameters (e.g., clearance, volume, rate constants) are not present in the extracted text. |

<sub>queue written 2026-11-18 21:43 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alnuqaydan_2026 | irrelevant | 0 | 0 | The paper is an in silico molecular docking study for cancer drug design where dicumarol is one of several tested compounds, reporting only binding affinities and no toxicokinetic parameters. |
| popPK | Crow_1979 | irrelevant | 0 | 0 | no_text gate: only 151 chars of text extracted (&lt; 400) |
| popPK | Crow_1979_2 | irrelevant | 2 | 0 | The paper discusses kinetic trends (slow absorption/elimination) qualitatively but does not report any quantitative numeric parameters for dicumarol. |
| popPK | Curto_2017 | irrelevant | 0 | 0 | The paper is a clinical review regarding dabigatran in dentistry; dicumarol (dicoumarin) is mentioned only as a class of comparator drugs without any kinetic parameters provided for it. |
| popPK | Curto_2017_2 | irrelevant | 0 | 0 | The paper is a review of edoxaban management in dentistry and does not report quantitative toxicokinetic parameters for dicumarol. |
| popPK | Gross_1986 | relevant | 8 | 2 | The paper reports pharmacokinetic studies on dicumarol (bishydroxycoumarin) in goats, but the provided text only gives qualitative trends (plateau time, lag time) without specific numeric parameters like half-life, Vd, or clearance in the visible evidence. |
| popPK | Huang_2026 | irrelevant | 0 | 0 | Dicumarol (dicoumarin) is mentioned only as an inhibitor for a control experiment in a study focused on novel radiotracers, with no kinetic parameters reported for dicumarol itself. |
| popPK | Hulse_1981 | relevant | 6 | 2 | The paper investigates the effect of sampling on dicumarol kinetics and confirms pharmacokinetic changes occurred, but specific numeric kinetic parameters (e.g., clearance, volume, rate constants) are not present in the extracted text. |
| PGx | Kim_2015 | not_relevant | 1 | 2 | Dicumarol is used merely as a pharmacological inhibitor of NQO1 to study resistance mechanisms, not as the drug whose PK/PD is being affected by gene variants. |
| popPK | Lai_1978_2 | irrelevant | 0 | 0 | no_text gate: only 177 chars of text extracted (&lt; 400) |
| popPK | Levy_1969 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Levy_1978 | irrelevant | 0 | 0 | no_text gate: only 200 chars of text extracted (&lt; 400) |
| PGx | MOTULSKY_1964 | not_relevant | 0 | 0 | The text is merely a header "PHARMACOGENETICS" with no specific content regarding dicumarol, gene variants, or PK/PD parameters. |
| popPK | Miŝkiniene_1999 | irrelevant | 0 | 0 | The paper discusses dicumarol only as an inhibitor of DT-diaphorase in an in vitro cytotoxicity study, with no toxicokinetic parameters measured or reported for dicumarol itself. |
| popPK | Myers_2007 | irrelevant | 0 | 0 | Dicumarol is mentioned only as an inhibitor in enzyme kinetic studies of a different substance (tetryl), not as the substance undergoing toxicokinetic characterization. |
| popPK | Nagashima_1968 | irrelevant | 0 | 0 | no_text gate: only 158 chars of text extracted (&lt; 400) |
| popPK | Nagashima_1968_2 | irrelevant | 0 | 0 | no_text gate: only 184 chars of text extracted (&lt; 400) |
| popPK | Nagashima_1968_3 | irrelevant | 0 | 0 | no_text gate: only 174 chars of text extracted (&lt; 400) |
| popPK | Nagashima_1968_4 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PGx | Qiu_1997 | not_relevant | 0 | 0 | The paper describes dicumarol as an inhibitor of NQOR enzyme in an in vitro mechanism study; it does not study dicumarol as the drug of interest nor does it report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Roy_1996 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for 5-nitroso-BP; dicumarol is used only as an analytical inhibitor in enzyme assays, not as the substance under kinetic study. |
| popPK | Shreevatsa_2021 | irrelevant | 1 | 0 | The paper is an in silico docking study where dicumarol is used as a comparator ligand for NQO1 inhibition; it contains no experimental toxicokinetic parameters for dicumarol. |
| PGx | Solomon_1966 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction effect of phenyramidol on bishydroxycoumarin (warfarin) metabolism, not a pharmacogenomic effect of a gene variant on the drug. |
| popPK | Sáez-Peñataro_2016 | irrelevant | 1 | 0 | The paper is a clinical review discussing posology of direct oral anticoagulants without reporting specific quantitative toxicokinetic parameters for dicumarol. |
| popPK | Wingard_1975 | relevant | 9 | 2 | The paper reports kinetic parameters for dicumarol in rats, but specific numeric values for volume of distribution and elimination rates are not present in the provided evidence snippet. |
| popPK | Yacobi_1975 | relevant | 9 | 3 | The paper reports biological half-lives and ratios for dicumarol in rats, but specific numeric values are limited to ranges and ratios without detailed parameter tables in the text. |
| popPK | Yacobi_1977 | irrelevant | 2 | 0 | The paper reports that phenobarbital had no effect on protein binding, providing no quantitative kinetic parameters or numeric values for dicumarol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdicumarol%5D&body=Drug%3A%20dicumarol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_dicumarol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-18 21:43 UTC</sub>
