<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P03B&quot;,&quot;href&quot;:&quot;atc/P03B.md&quot;},{&quot;label&quot;:&quot;cyfluthrin&quot;}]"></div>

# cyfluthrin

- **generic name:** cyfluthrin
- **ATC codes:** `P03BA01`
- **DrugBank:** [DB13828](https://go.drugbank.com/drugs/DB13828) · **PubChem:** none
- **molar mass:** 434.288 g/mol (C22H18Cl2FNO3) — DrugBank
- **groups:** experimental

## About

Cyfluthrin is a pyrethroid insecticide used primarily as a household and agricultural pesticide to control external parasites and insects. It is not authorised as a human medicine and is used mainly for insect control in commercial and residential settings.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q61641151](https://www.wikidata.org/wiki/Q61641151), [Wikipedia](https://en.wikipedia.org/wiki/Cyfluthrin?oldid=1384159724) (CC BY-SA 4.0) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cyfluthrin | parent | 434.288 | C22H18Cl2FNO3 | DrugBank | — | Rodríguez_2018 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Rodríguez_2018_reference](drugs/drug_cyfluthrin/Cyfluthrin_Rodrguez2018_reference.md) | — | 1-compartment (no model) | 4 | Rodríguez JL et al., Bioavailability and nervous tissue dist…, Food and chemical toxicolog… (2018) | [10.1016/j.fct.2018.05.012](https://doi.org/10.1016/j.fct.2018.05.012) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:28 | 2:20 | 1/0/0 | 0/0/0 | 0/0/0 | 3,525/144 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 19 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hughes_2016.pdf` | Hughes MF et al., Environmentally relevant pyrethroid mix…, Toxicology (2016) | pd | 5 | [10.1016/j.tox.2016.06.013](https://doi.org/10.1016/j.tox.2016.06.013) | [27330022](https://www.ncbi.nlm.nih.gov/pubmed/27330022) | metadata signals extractable PD data (sigmoid) |
| `Lanteigne_2015.pdf` | Lanteigne M et al., Mixture toxicity of imidacloprid and cy…, Archives of environmental c… (2015) | pd | 5 | [10.1007/s00244-014-0086-7](https://doi.org/10.1007/s00244-014-0086-7) | [25298152](https://www.ncbi.nlm.nih.gov/pubmed/25298152) | metadata signals extractable PD data (EC50) |
| `Starr_2014.pdf` | Starr JM et al., Environmentally relevant mixing ratios…, Toxicology (2014) | pd | 5 | [10.1016/j.tox.2014.02.016](https://doi.org/10.1016/j.tox.2014.02.016) | [24631210](https://www.ncbi.nlm.nih.gov/pubmed/24631210) | metadata signals extractable PD data (sigmoid) |
| `Mohapatra_1999.pdf` | Mohapatra R et al., Evaluation of cyfluthrin and fenfluthri…, The Journal of communicable… (1999) | pd | 4 |  | [10810595](https://www.ncbi.nlm.nih.gov/pubmed/10810595) | metadata signals extractable PD data (EC50) |
| `Pan_2025.pdf` | Pan W et al., Laboratory and field evaluation of inte…, Environmental entomology (2025) | pd | 4 | [10.1093/ee/nvaf054](https://doi.org/10.1093/ee/nvaf054) | [40577796](https://www.ncbi.nlm.nih.gov/pubmed/40577796) | metadata signals extractable PD data (EC50) |
| `Scollon_2009.pdf` | Scollon EJ et al., In vitro metabolism of pyrethroid pesti…, Drug metabolism and disposi… (2009) | pgx | 7 | [10.1124/dmd.108.022343](https://doi.org/10.1124/dmd.108.022343) | [18948380](https://www.ncbi.nlm.nih.gov/pubmed/18948380) | metadata signals extractable PGX data (CYP1A1, PK/PD-context) |

<sub>queue written 2026-11-23 20:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cao_2011 | irrelevant | 0 | 0 | The study is mechanistic (calcium influx in neurons) and does not report pharmacokinetic parameters for cyfluthrin. |
| PGx | Cao_2011 | not_relevant | 0 | 0 | The paper describes the mechanism of action of pyrethroids on calcium influx but does not report any pharmacogenomic effects (gene variants affecting PK/PD). |
| PGx | He_2025 | not_relevant | 3 | 5 | Reports genotype–resistance (mortality) associations in mosquitoes, not a PK/PD parameter change of cyfluthrin by a gene variant. |
| popPK | Hughes_2016 | irrelevant | 0 | 0 | no_text gate: only 175 chars of text extracted (&lt; 400) |
| PGx | Jin_2026 | not_relevant | 3 | 4 | Reports population-level correlation between F1534S kdr allele frequency and beta-cyfluthrin mortality (resistance phenotype), not a fitted pharmacogenomic effect on a PK/PD parameter. |
| popPK | Jones_2010 | irrelevant | 0 | 0 | This is a homology modelling study of insect cytochrome P450 enzymes and does not report pharmacokinetic parameters for cyfluthrin. |
| PGx | Jones_2010 | not_relevant | 0 | 0 | The paper uses homology modeling to show that CYP6G1 cannot accommodate cyfluthrin, rather than reporting a measured change in PK/PD parameters based on genotype. |
| popPK | Kudom_2020 | irrelevant | 0 | 0 | The study is an entomological surveillance and insecticide resistance assessment in mosquitoes, not a pharmacokinetic study of cyfluthrin in a human or animal subject. |
| PGx | Kudom_2020 | not_relevant | 5 | 0 | The paper reports insecticide resistance (a phenotypic PD response of an organism to a biocide) via genetic mutations and enzyme activity in a mosquito, but does not report pharmacogenomic effects on human pharmacokinetic or pharmacodynamic parameters for the specific drug 'cyfluthrin'. |
| popPK | Lanteigne_2015 | irrelevant | 0 | 0 | The study reports acute toxicity and mixture effects (EC50) in aquatic organisms, not pharmacokinetic disposition parameters. |
| PGx | Lanteigne_2015 | not_relevant | 0 | 0 | The paper describes ecological toxicity of a pesticide mixture to non-target species, not pharmacogenomic effects on human PK or PD parameters. |
| popPK | Leng_1999 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of cyfluthrin as a substrate for carboxylesterase activity, not a pharmacokinetic study reporting disposition parameters for the drug itself in a biological system. |
| PGx | Leng_1999 | not_relevant | 1 | 0 | The paper discusses in vitro enzyme activity and interindividual differences but does not report a specific pharmacogenomic effect of a defined gene variant on a PK/PD parameter. |
| popPK | Loha_2012 | irrelevant | 0 | 0 | The study evaluates the bio-efficacy of insecticide formulations against an insect species, containing no pharmacokinetic parameters or disposition data for cyfluthrin in a mammalian host. |
| PGx | Loha_2012 | not_relevant | 0 | 0 | The paper evaluates insecticide formulations against an insect pest and does not report pharmacogenomic effects on human or animal PK/PD parameters. |
| popPK | Major_2022 | irrelevant | 0 | 0 | The paper focuses on evolutionary genetics and resistance alleles in the amphipod *Hyalella azteca* regarding pyrethroid (cyfluthrin) resistance, not pharmacokinetic parameters. |
| PGx | Major_2022 | not_relevant | 2 | 5 | The paper reports on pyrethroid resistance (a pharmacodynamic endpoint of toxicity) in a non-target organism, but does not provide specific fitted pharmacokinetic (PK) or quantified pharmacodynamic (PD) parameter changes (e.g., IC50 shift, AUC) for the specific genotypes identified. |
| popPK | Mohapatra_1999 | irrelevant | 0 | 0 | The paper reports insecticidal activity and morphological effects on mosquitoes, not pharmacokinetic parameters. |
| PGx | Mohapatra_1999 | not_relevant | 0 | 0 | The paper evaluates the insecticidal activity of cyfluthrin on mosquitoes and does not report any human pharmacogenomic effects on PK or PD parameters. |
| popPK | Pan_2025 | irrelevant | 0 | 0 | The study reports toxicity and efficacy metrics (LC50, infestation reduction) for pest control, not population pharmacokinetic parameters (CL, V, ka) for cyfluthrin. |
| PGx | Pan_2025 | not_relevant | 0 | 0 | The paper evaluates the efficacy of insecticides (including cyfluthrin) on a pest species but does not report any pharmacogenomic analysis or genetic variant effects on PK/PD parameters. |
| popPK | Quindroit_2019 | irrelevant | 2 | 0 | The paper describes a PBPK model for cyfluthrin but the abstract does not provide the specific quantitative pharmacokinetic parameter values (CL, V, Q, ka) for cyfluthrin, and the focus is on a multi-route exposure model for the population. |
| PGx | Quindroit_2019 | not_relevant | 0 | 0 | The study presents a population PK model for pyrethroids but does not report any gene variant, genotype, or phenotype effects on PK/PD parameters. |
| PGx | Rodríguez_2018 | not_relevant | 0 | 10 | The paper describes toxicokinetics in rats but does not investigate the impact of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Scollon_2009 | irrelevant | 2 | 0 | The study is an in vitro mechanistic metabolism study reporting intrinsic clearance (CLint) and enzyme involvement, not a population PK study with disposition parameters (CL, V, half-life, ka). |
| PGx | Scollon_2009 | not_relevant | 2 | 1 | The paper reports on the intrinsic clearance and metabolism of pyrethroids by hepatic microsomes from rats and humans to compare species, but it does not examine how specific human gene variants (SNPs/polymorphisms) affect a pharmacokinetic or pharmacodynamic parameter. |
| popPK | Starr_2012 | relevant | 6 | 2 | The study reports toxicokinetic data for cyfluthrin in rats, but specific numeric parameters like clearance or volume are not explicitly listed in the abstract, only general half-life ranges (&lt; 7h) and a reference to a model. |
| PGx | Starr_2012 | not_relevant | 0 | 0 | The study is a toxicological investigation of pyrethroid mixtures in rats and does not involve human genetics or pharmacogenomics. |
| popPK | Starr_2014 | irrelevant | 0 | 0 | no_text gate: only 230 chars of text extracted (&lt; 400) |
| popPK | Weston_2010 | irrelevant | 0 | 0 | The paper is an environmental monitoring study of pesticide sources in surface waters, not a pharmacokinetic study of cyfluthrin. |
| PGx | Weston_2010 | not_relevant | 0 | 0 | The paper investigates environmental sources of pyrethroid insecticides in water bodies, not pharmacogenomic effects on human PK/PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcyfluthrin%5D&body=Drug%3A%20cyfluthrin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cyfluthrin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:25 UTC</sub>
