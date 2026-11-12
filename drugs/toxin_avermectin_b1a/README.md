<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Avermectin B1a&quot;}]"></div>

# Avermectin B1a

- **generic name:** Avermectin B1a
- **T3DB:** [T3D1041](http://www.t3db.ca/toxins/T3D1041) · **PubChem:** [CID 6434889](https://pubchem.ncbi.nlm.nih.gov/compound/6434889)

## About

The avermectins are a series of macrocyclic lactone derivatives with potent anthelmintic properties. A commonly used therapy in recent times has been based on oral or parenteral administration of avermectins, which are macrocyclic lactones produced by fermentation of various, carefully prepared laboratory broths using the soil micro-organism Streptomyces avermitilis. They show activity against a broad range of nematodes and arthropod parasites of domestic animals at dose rates of 300 microgram/kg or less. …

- **Category:** Pesticide, Household Toxin, Bacterial Toxin, Natural Toxin
- **Sources and uses:** Active ingredient in some commercial ant bait traps.
- **Mechanism of toxicity:** It has low solubility in water and extensive non-specific binding. It opens GABA-insensitive chloride channels, reducing membrane resistance and increasing conductance inward.
- **Health effects:** Avermectins are neurotoxic and have reproductive and developmental effects.
- **Carcinogenicity:** Not listed by IARC.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D1041">T3DB T3D1041</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 65195-55-3 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:29534">ChEBI 29534</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Lloberas_2013_reference](drugs/toxin_avermectin_b1a/AvermectinB1a_Lloberas2013_reference.md) | — | 1-compartment (no model) | 0 | Lloberas M et al., Comparative tissue pharmacokinetics and…, International journal for p… (2013) | [10.1016/j.ijpddr.2012.11.001](https://doi.org/10.1016/j.ijpddr.2012.11.001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Alves_2011_mortalidade](drugs/toxin_avermectin_b1a/pd_Alves_2011_mortalidade.md) | mortalidade ← abamectina · categorical (graded) response model | — | Alves SN et al., [Susceptibility of Culex quinquefasciat…, Revista da Sociedade Brasil… (2011) | [10.1590/s0037-86822011000400017](https://doi.org/10.1590/s0037-86822011000400017) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [de_2013_Mortality](drugs/toxin_avermectin_b1a/pd_de_2013_Mortality.md) | Mortality of Raoiella indica ← abamectin · categorical (graded) response model | — | de Assis CP et al., Toxicity of acaricides to Raoiella indi…, Experimental & applied acar… (2013) | [10.1007/s10493-012-9647-5](https://doi.org/10.1007/s10493-012-9647-5) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [de_2013_Mortality_2](drugs/toxin_avermectin_b1a/pd_de_2013_Mortality_2.md) | Mortality of Amblyseius largoensis ← abamectin · categorical (graded) response model | — | de Assis CP et al., Toxicity of acaricides to Raoiella indi…, Experimental & applied acar… (2013) | [10.1007/s10493-012-9647-5](https://doi.org/10.1007/s10493-012-9647-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-10 22:34 | 28:18 | 0/1/0 | 2/0/0 | 0/0/0 | 517,575/34,971 | einfracz / qwen3.8-27b | 28 | 4/10 | 28/0 | 0 |

## Coverage

- **PubMed hits:** 242 matched, 88 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sutherland_1990.pdf` | Sutherland IH et al., Development, pharmacokinetics and mode…, Acta Leidensia (1990) | popPK | 10 |  | [2378205](https://pubmed.ncbi.nlm.nih.gov/2378205) | The paper describes the development and pharmacokinetics of ivermectin (22,23-dihydro-avermectin B1), a direct metabolite/derivative of avermectin B1, but the specific numeric values are only described qualitatively (e.g., "absorbed rapidly") without providing quantitative rates or half-lives in the text. |
| `Cavicchioli_2024.pdf` | Cavicchioli Azevedo V et al., Ivermectin Toxicokinetics in Rainbow Tr…, Archives of environmental c… (2024) | popPK | 5 | [10.1007/s00244-023-01045-7](https://doi.org/10.1007/s00244-023-01045-7) | [38103085](https://pubmed.ncbi.nlm.nih.gov/38103085) | The paper reports toxicokinetics for ivermectin, which is defined in the text as the dihydro derivative of avermectin B1a, but the subject substance is ivermectin, not avermectin B1a, and no numeric values are provided in the evidence. |
| `Sari_2017.pdf` | Sari P et al., Pharmacokinetics of Abamectin/Levamisol…, AAPS PharmSciTech (2017) | popPK | 5 | [10.1208/s12249-016-0591-2](https://doi.org/10.1208/s12249-016-0591-2) | [27474036](https://pubmed.ncbi.nlm.nih.gov/27474036) | The paper reports pharmacokinetic parameters (ka, tmax, MRT) for abamectin (a mixture containing avermectin b1a) and levamisole in sheep, but does not isolate or report specific quantitative kinetic parameters for avermectin b1a alone. |

<sub>queue written 2026-11-10 22:18 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abass_2009 | not_relevant | 0 | 0 | The paper evaluates CYP inhibition potential of various pesticides in human microsomes but does not report pharmacogenomic effects of avermectin_b1a. |
| popPK | Alves_2011 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) in mosquitoes, not toxicokinetic parameters (half-life, clearance, partition coefficients) for avermectin_b1a. |
| popPK | Ballent_2019 | irrelevant | 0 | 0 | The paper focuses on ivermectin and abamectin, not avermectin B1a, and the specific substance of interest is absent from the reported data. |
| popPK | Bassissi_2004 | irrelevant | 0 | 0 | The study investigates the distribution of moxidectin, ivermectin, abamectin, doramectin, and eprinomectin in lipoproteins, but does not report data for avermectin_b1a. |
| popPK | Blanco-Paniagua_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of clorsulon, using ivermectin and abamectin only as co-administered inhibitors of ABCG2; no quantitative kinetic parameters are reported for avermectin_b1a or abamectin itself. |
| PGx | Blanco-Paniagua_2023 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction between avermectins and clorsulon, not a pharmacogenomic effect (gene variant/genotype) on the pharmacokinetics of avermectins. |
| popPK | Borges_2007 | irrelevant | 0 | 0 | The paper reports kinetic parameters for ivermectin and abamectin, not avermectin b1a, and contains no quantitative data for the target substance. |
| popPK | Boudjema_2025 | irrelevant | 0 | 0 | The paper is a toxicological study focusing on oxidative stress markers and antioxidant effects, reporting no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for abamectin. |
| popPK | Cavicchioli_2024 | irrelevant | 5 | 0 | The paper reports toxicokinetics for ivermectin, which is defined in the text as the dihydro derivative of avermectin B1a, but the subject substance is ivermectin, not avermectin B1a, and no numeric values are provided in the evidence. |
| popPK | Cerkvenik-Flajs_2007 | irrelevant | 0 | 0 | The paper reports kinetic parameters for abamectin, not avermectin_b1a. |
| popPK | Chhonker_2018 | irrelevant | 0 | 0 | The paper reports a bioanalytical method for ivermectin, not avermectin_b1a, and contains no toxicokinetic parameters. |
| popPK | Croubels_2002 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting ivermectin B(1a) (avermetin_b1a) in plasma but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance) for the substance. |
| PGx | Dalzell_2015 | not_relevant | 1 | 5 | The paper describes in vitro transporter inhibition (Ki/IC50 values) for avermectins but does not report pharmacogenomic effects (gene variants) on PK/PD parameters of avermectin_b1a. |
| popPK | Echeverría_2001 | irrelevant | 0 | 0 | no_text gate: only 39 chars of text extracted (&lt; 400) |
| popPK | El-Saber_2020 | irrelevant | 2 | 1 | The paper is a review that reports pharmacokinetic parameters (half-life, AUC, etc.) primarily for ivermectin and other derivatives, but does not provide specific quantitative toxicokinetic parameters for the distinct compound avermectin B1a as the subject substance. |
| popPK | Johnston_2024 | irrelevant | 1 | 1 | The study reports kinetic parameters for ivermectin, which is explicitly defined as the dihydro derivative of avermectin B1a, making it a different chemical substance. |
| popPK | Kalefetoğlu_2021 | irrelevant | 0 | 0 | The paper reports cytotoxicity and genotoxicity outcomes in plants (Allium cepa) but contains no kinetic parameters (half-life, clearance, etc.) for avermectin_b1a or any other substance. |
| popPK | Karaca_2021 | relevant | 7 | 2 | The paper investigates the in vitro transport of avermectin B1a (major component of abamectin) in Caco-2 cells and calculates apparent permeability coefficients (Papp), which are quantitative kinetic parameters, but the specific numeric values are not present in the provided text and are likely in figures or supplementary material. |
| popPK | Koehler_1991 | irrelevant | 0 | 0 | The study reports toxicity metrics (LC50/LT50) for abamectin in cockroaches, not kinetic parameters for avermectin_b1a. |
| PGx | Learmount_2012 | not_relevant | 0 | 0 | The study models anthelmintic resistance development in parasites (nematodes) and does not report pharmacogenomic effects on human PK or PD parameters for avermectin_b1a. |
| popPK | Leathwick_2016 | irrelevant | 1 | 1 | The study focuses on the substance abamectin, not avermectin_b1a, and while it measures plasma parameters (Cmax, AUC), the specific values are not provided in the text. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper focuses on insecticide resistance mechanisms and bioassay outcomes in insects, not on the quantitative toxicokinetic parameters of avermectin_b1a in humans or animals. |
| popPK | Mackintosh_2014 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for abamectin and moxidectin, not avermectin B1a, which is not explicitly studied or quantified in this study. |
| PGx | Martenies_2013 | not_relevant | 0 | 0 | The paper is a systematic review of pesticide exposure and semen quality, and does not discuss pharmacogenomic effects of avermectin_b1a. |
| popPK | Martin_2009 | irrelevant | 0 | 0 | The paper focuses on triclabendazole pharmacokinetics in cattle, with no kinetic data or parameters reported for avermectin b1a. |
| popPK | Monteiro_2012 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50) of acaricides to a mite, not toxicokinetic parameters for avermectin_b1a. |
| popPK | Nakatani_2023 | irrelevant | 0 | 0 | The paper evaluates the synergistic effects of macrocyclic lactones on Haemonchus contortus larvae (pharmacodynamics/efficacy) and does not report any quantitative toxicokinetic parameters for avermectin_b1a or any other substance. |
| PGx | Parton_2012 | not_relevant | 5 | 8 | The paper reports toxicity cases in dogs lacking the ABCB1 mutation, noting that the drug is abamectin (a congener of avermectin_b1a), but it does not report a pharmacogenomic effect on PK/PD parameters (only case-based plasma concentrations without comparative genotype modeling). |
| popPK | Pohl_2012 | irrelevant | 0 | 0 | The study reports toxicity (LC50) data for various acaricides (including ivermectin and abamectin) in ticks, but contains no toxicokinetic parameters (half-life, clearance, etc.) and does not investigate avermectin_b1a. |
| PGx | Prichard_2021 | not_relevant | 1 | 1 | The paper reviews macrocyclic lactone resistance in Dirofilaria immitis (the pathogen) but does not report a pharmacogenomic effect of a host gene variant on the PK or PD parameters of avermectin_b1a. |
| popPK | Rahman_2024 | irrelevant | 0 | 0 | The paper reports acute toxicity (LC50/LT50) data for abamectin (a mixture containing avermectin b1a) in mosquitoes, but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Santos_2011 | irrelevant | 0 | 0 | The paper reports insecticide resistance ratios (LC50s) in diamondback moth (Plutella xylostella) for abamectin, not toxicokinetic parameters (half-life, clearance, etc.) for avermectin b1a in a mammalian or human system. |
| popPK | Sari_2017 | irrelevant | 5 | 8 | The paper reports pharmacokinetic parameters (ka, tmax, MRT) for abamectin (a mixture containing avermectin b1a) and levamisole in sheep, but does not isolate or report specific quantitative kinetic parameters for avermectin b1a alone. |
| PGx | Sayyed_2008 | not_relevant | 0 | 0 | The paper discusses resistance to spinosad in insects, not pharmacogenomic effects on the PK/PD of avermectin_b1a. |
| popPK | Shoop_1996 | irrelevant | 0 | 0 | The paper focuses on eprinomectin, a different substance, with avermectin B1a serving only as the parent structure for comparison; no specific kinetic parameters for avermectin B1a are reported. |
| popPK | Silva_2026 | irrelevant | 0 | 0 | The paper reports acute toxicity (mortality/LC50) of pesticide mixtures, not toxicokinetic parameters, and does not specifically study avermectin_b1a. |
| popPK | Singh_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for abamectin, not avermectin_b1a. |
| popPK | Sutherland_1990 | relevant | 10 | 0 | The paper describes the development and pharmacokinetics of ivermectin (22,23-dihydro-avermectin B1), a direct metabolite/derivative of avermectin B1, but the specific numeric values are only described qualitatively (e.g., "absorbed rapidly") without providing quantitative rates or half-lives in the text. |
| popPK | Tang_2015 | irrelevant | 0 | 0 | The paper focuses on insecticide resistance (LC50) in the ladybird beetle Propylaea japonica and does not report any toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for avermectin_b1a. |
| PGx | Tian_2013 | not_relevant | 2 | 5 | The paper reports differential gene expression (mRNA levels) of a transporter in resistant vs susceptible strains, but does not measure or report changes in pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper reports that knocking out ABC transporter genes affects susceptibility to Bt toxins, but explicitly states that susceptibility to abamectin (avermectin_b1a) was not affected by the genetic knockouts. |
| popPK | Werners_2022 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of abamectin, not avermectin_b1a, and does not provide specific kinetic parameters for the target substance. |
| popPK | Zele_2011 | irrelevant | 0 | 0 | The study reports kinetic parameters for abamectin, not avermectin_b1a. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for moxidectin, and avermectin_b1a is used solely as an internal standard for the analytical method. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper focuses on identifying SSR and SNP markers in Tuta absoluta for resistance mechanisms, but it does not report specific pharmacokinetic or pharmacodynamic parameter changes (e.g., clearance, half-life, potency) linked to specific genotypes for avermectin_b1a. |
| popPK | de_2013 | irrelevant | 0 | 0 | The paper is an acute toxicity (LC50/LC90) study of acaricides on mites, not a toxicokinetic study, and it does not report kinetic parameters for avermectin_b1a specifically. |
| PGx | de_2018 | not_relevant | 0 | 0 | The paper discusses toxicity in calves of unspecified genetics, and while MDR1/ABCB1 is mentioned as a possible influence, no genotypes or quantitative pharmacogenomic effect on PK/PD parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bavermectin_b1a%5D&body=Drug%3A%20avermectin_b1a%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_avermectin_b1a/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-10 22:18 UTC</sub>
