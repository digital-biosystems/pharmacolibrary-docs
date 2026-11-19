<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Mestranol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mestranol_Kohler1968_reference&quot;,&quot;label&quot;:&quot;Kohler_1968_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mestranol/Mestranol_Kohler1968_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mestranol_Longcope1975_reference&quot;,&quot;label&quot;:&quot;Longcope_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_mestranol/Mestranol_Longcope1975_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

# Mestranol

- **generic name:** Mestranol
- **T3DB:** [T3D4791](http://www.t3db.ca/toxins/T3D4791) · **DrugBank:** [DB01357](https://go.drugbank.com/drugs/DB01357) · **PubChem:** [CID 6291](https://pubchem.ncbi.nlm.nih.gov/compound/6291)
- **groups:** approved, withdrawn

## About

The 3-methyl ether of ethinyl estradiol. It must be demethylated to be biologically active. It is used as the estrogen component of many combination ORAL contraceptives.

- **Category:** Drug, Synthetic Toxin
- **Sources and uses:** Mestranol was used as one of the first oral contraceptives.
- **Mechanism of toxicity:** Mestranol is the 3-methyl ether of ethinylestradiol. Ethinylestradiol, is a synthetic derivative of estradiol. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4791">T3DB T3D4791</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 72-33-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:6784">ChEBI 6784</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Mestranol | parent | 310.437 | C21H26O2 | PubChem | [6291](https://pubchem.ncbi.nlm.nih.gov/compound/6291) | Longcope_1975 |
| Ethinyl estradiol | metabolite | 296.41 | C20H24O2 | PubChem | [5991](https://pubchem.ncbi.nlm.nih.gov/compound/5991) | Longcope_1975 |

## Start here

> **Longcope_1975_reference** — <span class="pk-badge pk-badge--blue">Simulated</span> non-users and users of oral contraceptives. [Run it in the simulator](drugs/toxin_mestranol/Mestranol_Longcope1975_reference.md?tab=Simulation) · [record](drugs/toxin_mestranol/Mestranol_Longcope1975_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Kohler_1968_reference](drugs/toxin_mestranol/Mestranol_Kohler1968_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Kohler PO et al., Metabolic clearance and production rate…, The Journal of clinical inv… (1968) | [10.1172/JCI105713](https://doi.org/10.1172/JCI105713) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Simulated" data-sim="yes"></span><span class="pk-badge pk-badge--blue">Simulated</span> | [Longcope_1975_reference](drugs/toxin_mestranol/Mestranol_Longcope1975_reference.md) | ▶ model + simulator | retention, 1 pool | 2 | Longcope C et al., The metabolism of synthetic estrogens i…, Steroids (1975) | [10.1016/s0039-128x(75)80012-2](https://doi.org/10.1016/s0039-128x(75)80012-2) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mestranol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C8` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ESR1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 02:17 | 8:35 | 2/0/0 | 0/0/0 | 0/0/0 | 181,132/8,469 | einfracz / qwen3.8-flash-next | 4 | 1/0 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 120 matched, 84 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 2  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Longcope_1975.pdf` | Longcope C et al., The metabolism of synthetic estrogens i…, Steroids (1975) | popPK | 9 | [10.1016/s0039-128x(75)80012-2](https://doi.org/10.1016/s0039-128x(75)80012-2) | [1111171](https://pubmed.ncbi.nlm.nih.gov/1111171) | The paper reports quantitative metabolic clearance rates for mestranol and conversion fractions to ethinyl estradiol, including standard errors. |
| `Hu_2015.pdf` | Hu JH et al., Effect of CYP2C9 Genetic Polymorphism i…, Pharmacology (2015) | popPK | 8 | [10.1159/000381189](https://doi.org/10.1159/000381189) | [25924705](https://pubmed.ncbi.nlm.nih.gov/25924705) | The paper reports Km and Vmax values for mestranol metabolism by CYP2C9 variants, but the specific numeric results are not included in the provided text, only referenced in the abstract. |
| `de_1975.pdf` | de la Pena A et al., Radioimmunoassay of unconjugated plasma…, Steroids (1975) | popPK | 8 | [10.1016/0039-128x(75)90041-0](https://doi.org/10.1016/0039-128x(75)90041-0) | [1154455](https://pubmed.ncbi.nlm.nih.gov/1154455) | The paper studies the pharmacokinetics of mestranol conversion to ethynylestradiol, but specific kinetic parameters (half-lives, clearances) are likely in the figures/tables not provided in the text extract, which only mentions sensitivity and precision of the assay. |

<sub>queue written 2026-11-15 02:16 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1981 | irrelevant | 0 | 0 | The paper reports kinetic parameters for antipyrine, not mestranol; mestranol is only mentioned as a component of the oral contraceptives used as a co-exposure. |
| popPK | Berr_1986 | irrelevant | 0 | 0 | The paper studies cholesterol/chylomicron kinetics in women taking contraceptives, but does not report toxicokinetic parameters for mestranol itself. |
| popPK | Bird_1973 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| popPK | Blackham_1969 | irrelevant | 1 | 0 | The paper studies the effect of mestranol on the clearance of barbiturates (pentobarbitone/hexobarbitone), not the toxicokinetics of mestranol itself; no kinetic parameters for mestranol are reported. |
| popPK | Boekenoogen_1983 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for prednisolone, not mestranol; mestranol is not mentioned. |
| popPK | Bolt_1974 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| popPK | Bolt_1985 | irrelevant | 0 | 0 | no_text gate: only 82 chars of text extracted (&lt; 400) |
| popPK | Brody_1989 | irrelevant | 3 | 6 | Mestranol is administered but its kinetic parameters are not reported; the study analyzes its metabolite ethinyl estradiol and the co-administered drug norethindrone. |
| popPK | Carter_1975 | irrelevant | 1 | 1 | Mestranol is a component of the contraceptive therapy being studied as an inhibitor of clearance for other drugs (antipyrine, phenylbutazone, vitamin D3), not the substance being kinetically characterized. |
| popPK | Droździk_1994 | irrelevant | 1 | 0 | The paper reports pharmacokinetic parameters for paracetamol, not mestranol; mestranol is only the pretreatment substance. |
| popPK | Fotherby_1982 | irrelevant | 0 | 0 | no_text gate: only 47 chars of text extracted (&lt; 400) |
| popPK | Gawrońska-Szklarz_1996 | irrelevant | 0 | 0 | The study focuses on the effect of mestranol on the pharmacokinetics of phenazone, not on the toxicokinetics of mestranol itself. |
| popPK | Goldzieher_1980 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Goldzieher_1990 | irrelevant | 3 | 0 | The text discusses pharmacokinetic concepts (bioequivalence, half-life implications) but contains no specific numeric kinetic parameters for mestranol itself. |
| popPK | Goldzieher_1990_2 | irrelevant | 4 | 0 | The paper is a qualitative review comparing the relative potency of mestranol and ethinyl estradiol without reporting specific quantitative toxicokinetic parameters for mestranol. |
| popPK | Gomez_2001 | irrelevant | 1 | 1 | The study focuses on immunomodulatory effects (Fcgamma receptor expression) and does not report any quantitative toxicokinetic parameters for mestranol. |
| popPK | Green_1978 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Hamid_2013 | irrelevant | 0 | 0 | The paper reports on the environmental fate of steroids in sludge digestion and does not involve a biological organism or report toxicokinetic parameters for mestranol. |
| popPK | Helton_1977 | irrelevant | 2 | 0 | The text is an abstract of a review paper describing a review of pharmacokinetics, with no specific quantitative kinetic parameters for mestranol reported in the evidence. |
| popPK | Hu_2015 | relevant | 8 | 2 | The paper reports Km and Vmax values for mestranol metabolism by CYP2C9 variants, but the specific numeric results are not included in the provided text, only referenced in the abstract. |
| popPK | Kohler_1968 | irrelevant | 0 | 0 | Mestranol appears only as a co-administered contraceptive component in a study measuring the toxicokinetics of human luteinizing hormone (HLH), not mestranol itself. |
| popPK | Kwiatkowski_1991 | irrelevant | 0 | 0 | The study focuses on the effect of estrogens on phenazone and paracetamol kinetics; mestranol is used only as a pretreatment/co-exposure, and no kinetic parameters for mestranol itself are reported. |
| PGx | Liu_2022 | not_relevant | 0 | 0 | The paper lists mestranol as a metabolic marker associated with T2D risk, but does not investigate any pharmacogenomic effects of gene variants on mestranol's PK or PD parameters. |
| popPK | Madden_1978 | irrelevant | 0 | 0 | The paper measures serum concentrations of a different substance (DHEA sulfate) to assess the effect of oral contraceptives, reporting no kinetic parameters for mestranol. |
| popPK | Mills_1974 | irrelevant | 0 | 0 | no_text gate: only 93 chars of text extracted (&lt; 400) |
| popPK | Miners_1984 | irrelevant | 0 | 0 | The paper studies clofibric acid kinetics, with mestranol appearing only as a component of the oral contraceptive steroids acting as an enzyme inducer, not as the subject of kinetic analysis. |
| popPK | Orme_1983 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| popPK | Rangnekar_1974 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Roberts_1979 | irrelevant | 0 | 0 | The paper reports toxicokinetic parameters for chlordiazepoxide, not mestranol, which is only mentioned as a component of oral contraceptives in a co-exposure context. |
| popPK | Sahlberg_1987 | irrelevant | 2 | 0 | The study analyzes metabolic profiles and concentrations of norethindrone metabolites but reports no quantitative kinetic parameters (e.g., half-life, clearance, Vd) for mestranol itself. |
| PGx | Schmider_1997 | not_relevant | 2 | 0 | The paper reports pharmacokinetic metabolic inhibition by chemical inhibitors (phenotyping), but does not analyze genetic variants, genotypes, or specific polymorphisms affecting PK/PD parameters. |
| popPK | Shader_1999 | irrelevant | 0 | 0 | Mestranol is mentioned only as a potential future clinical substrate for inhibition, not as the subject of toxicokinetic analysis, and no kinetic parameters for mestranol are reported. |
| PGx | Shader_1999 | not_relevant | 0 | 0 | The paper reports an in vitro study on zafirlukast's inhibition of CYP enzymes; it only mentions mestranol in the conclusion as a potential future target for study, without providing any pharmacogenomic data or PK/PD parameters. |
| popPK | Vose_1979 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for ethynodiol diacetate and its metabolite norethisterone, but does not mention or measure mestranol. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | The paper reports environmental concentrations of mestranol in estuarine water and sediment, but contains no quantitative toxicokinetic parameters or disposition models. |
| popPK | Zech_1975 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| popPK | de_1975 | relevant | 8 | 3 | The paper studies the pharmacokinetics of mestranol conversion to ethynylestradiol, but specific kinetic parameters (half-lives, clearances) are likely in the figures/tables not provided in the text extract, which only mentions sensitivity and precision of the assay. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmestranol%5D&body=Drug%3A%20mestranol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_mestranol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 02:16 UTC</sub>
