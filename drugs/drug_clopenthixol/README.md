<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;clopenthixol&quot;}]"></div>

# clopenthixol

- **generic name:** clopenthixol
- **ATC codes:** `N05AF02`
- **DrugBank:** [DB13841](https://go.drugbank.com/drugs/DB13841) · **PubChem:** none
- **molar mass:** 400.97 g/mol (C22H25ClN2OS) — DrugBank
- **groups:** investigational

## About

Clopenthixol is a typical antipsychotic of the thioxanthene class used to treat psychiatric conditions. It is administered orally in pill form.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q413000](https://www.wikidata.org/wiki/Q413000), [Wikipedia](https://en.wikipedia.org/wiki/Clopenthixol?oldid=1371971788) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clopenthixol | parent | 400.97 | C22H25ClN2OS | DrugBank | — | Jrgensen_1980 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Jrgensen_1980_reference](drugs/drug_clopenthixol/Clopenthixol_Jrgensen1980_reference.md) | — | 1-compartment (no model) | 1 | Jrgensen A et al., Clopenthixol and flupenthixol depot pre…, Acta psychiatrica Scandinav… (1980) | [10.1111/j.1600-0447.1980.tb07082.x](https://doi.org/10.1111/j.1600-0447.1980.tb07082.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 20:22 | 0:12 | 1/0/0 | 0/0/0 | 0/0/0 | 3,252/160 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Viala_1984.pdf` | Viala A et al., Blood and plasma kinetics of cis(Z)-clo…, Psychopharmacology (1984) | popPK | 5 | [10.1007/BF00429723](https://doi.org/10.1007/BF00429723) | [6146995](https://pubmed.ncbi.nlm.nih.gov/6146995) | The study describes PK kinetics of clopenthixol decanoate in humans, but the extracted evidence text contains no quantitative parameter values (no CL, V, or specific concentration numbers). |

<sub>queue written 2026-11-23 20:22 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aaes-Jørgensen_1981 | irrelevant | 5 | 2 | The study reports only a single pharmacokinetic parameter (biological half-life) for cis(Z)-clopenthixol and does not provide clearance, volume of distribution, or a compartmental/population model, which are required for high relevance in this context. |
| PGx | Aaes-Jørgensen_1981 | not_relevant | 0 | 0 | The paper reports pharmacokinetic parameters for clopenthixol but does not mention or analyze any genetic variants, genotypes, or phenotypes (pharmacogenomics). |
| popPK | Aaes-Jørgensen_1983 | relevant | 5 | 2 | The study describes a pharmacokinetic analysis of clopenthixol in humans with serum concentration data, but specific quantitative disposition parameters (CL, V, half-life) are not explicitly listed in the provided text. |
| PGx | Aaes-Jørgensen_1983 | not_relevant | 0 | 0 | The study describes PK of clopenthixol in patients but does not investigate genetic variants or genotype-phenotype interactions. |
| popPK | Altamura_2003 | irrelevant | 0 | 0 | This is a clinical review article discussing the use of intramuscular antipsychotics and does not report original quantitative pharmacokinetic parameter values (CL, V, etc.) for clopenthixol. |
| PGx | Altamura_2003 | not_relevant | 0 | 0 | The paper is a general review of intramuscular antipsychotic formulations and does not discuss pharmacogenomics or genetic variants affecting clopenthixol pharmacokinetics or pharmacodynamics. |
| popPK | Balant-Gorgia_1987 | irrelevant | 1 | 0 | The paper is a review of antipsychotic pharmacokinetics without original quantitative data extraction for clopenthixol in the provided text. |
| PGx | Balant-Gorgia_1987 | not_relevant | 0 | 0 | The paper is a general review of the pharmacokinetics and analytical methods for various antipsychotics, including clopenthixol, but it does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Casey_1989 | irrelevant | 0 | 0 | The study is a behavioral/efficacy trial assessing extrapyramidal side effects in monkeys and does not report any pharmacokinetic parameters. |
| PGx | Casey_1989 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of clopenthixol on extrapyramidal syndromes in primates but contains no information regarding genetic variants, genotypes, or pharmacogenomics. |
| popPK | Casey_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of neuroleptic-induced extrapyramidal symptoms in nonhuman primates and does not report any pharmacokinetic parameters (such as clearance, volume, or half-life) for clopenthixol. |
| PGx | Casey_1993 | not_relevant | 0 | 0 | The study reports clinical observations of extrapyramidal symptoms in nonhuman primates and makes no mention of pharmacogenomic effects or gene variants. |
| popPK | Chang_1988 | irrelevant | 0 | 0 | The study reports neurochemical dose-response data (HVA levels) rather than pharmacokinetic disposition parameters (CL, V, etc.) for clopenthixol. |
| PGx | Chang_1988 | not_relevant | 0 | 0 | The paper describes a standard dose-response pharmacological study in rats and does not investigate the effect of any genetic variant or genotype on clopenthixol pharmacokinetics or pharmacodynamics. |
| popPK | Conca_2003 | irrelevant | 0 | 0 | The study investigates iron metabolism and hyperthermia in catatonic patients treated with zuclopenthixol-acetate, not the pharmacokinetic parameters of clopenthixol. |
| PGx | Conca_2003 | not_relevant | 0 | 0 | The paper investigates the relationship between iron levels and hyperthermia in patients taking zuclopenthixol, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of clopenthixol or zuclopenthixol. |
| popPK | Danielczyk_1981 | irrelevant | 0 | 0 | This is a clinical efficacy study for treating psychoses in Parkinson's patients, containing no pharmacokinetic parameters or data. |
| PGx | Danielczyk_1981 | not_relevant | 0 | 0 | The paper discusses clinical efficacy in a specific patient population (Parkinson's) but does not report any pharmacogenomic effects or genetic associations with PK/PD parameters. |
| popPK | Dencker_1980 | irrelevant | 4 | 0 | The study reports correlations between serum concentration metrics (min concentration, AUC) and clinical outcomes, but does not provide quantitative PK disposition parameters like clearance, volume, or half-life. |
| PGx | Dencker_1980 | not_relevant | 0 | 0 | The paper correlates serum levels with clinical outcome but does not investigate gene variants or genotypes. |
| popPK | Hassan_1989 | irrelevant | 0 | 0 | The paper describes a fluorometric assay method for thioxanthene derivatives, including clopenthixol, but does not report any pharmacokinetic parameters or disposition data. |
| PGx | Hassan_1989 | not_relevant | 0 | 0 | The paper describes a fluorometric analytical method for determining thioxanthene derivatives in dosage forms and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Jrgensen_1980 | not_relevant | 0 | 0 | The paper reports population PK parameters for clopenthixol depot but contains no data on genetic variants or genotypes. |
| popPK | Kristiansen_1981 | irrelevant | 0 | 0 | The study investigates the antibacterial activity and stereo-isomeric dissociation of effects, not pharmacokinetic parameters. |
| PGx | Kristiansen_1981 | not_relevant | 0 | 0 | The paper discusses the stereochemical dissociation of antibacterial and neuroleptic effects, but reports no pharmacogenomic influence on PK or PD parameters. |
| popPK | Kristiansen_1985 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anti-malarial activity of clopenthixol, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Kristiansen_1985 | not_relevant | 0 | 0 | The paper describes the anti-malarial activity of clopenthixol on Plasmodium falciparum, not a pharmacogenomic effect on a human PK/PD parameter. |
| popPK | Kristiansen_1989 | irrelevant | 0 | 0 | The paper is an in-vitro microbiological study assessing antimicrobial activity, not a pharmacokinetic study. |
| PGx | Kristiansen_1989 | not_relevant | 0 | 0 | The paper investigates the in vitro antimicrobial activity of antipsychotics against H. pylori and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of clopenthixol. |
| popPK | Kristiansen_2007 | irrelevant | 0 | 0 | The paper focuses on the antimicrobial properties of clopenthixol against bacteria and does not report pharmacokinetic parameters. |
| PGx | Kristiansen_2007 | not_relevant | 0 | 0 | The paper discusses the antimicrobial properties of clopenthixol on bacteria, not pharmacogenomic effects on human PK/PD parameters. |
| popPK | Kurtzhals_1988 | irrelevant | 2 | 0 | The paper focuses on the anti-malarial efficacy of clopenthixol in mice, and while it mentions a pharmacokinetic study was conducted to optimize dosage, no quantitative PK parameters (CL, V, etc.) for clopenthixol are reported in the provided evidence. |
| PGx | Kurtzhals_1988 | not_relevant | 0 | 0 | The paper reports on the anti-malarial efficacy and PK of clopenthixol in mice, but does not investigate pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Lambert_1984 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial reporting symptomatic improvement and side effects, containing no quantitative pharmacokinetic parameters such as clearance or volume. |
| PGx | Lambert_1984 | not_relevant | 0 | 0 | The paper reports general clinical efficacy and side effects of clopenthixol decanoate but contains no data on gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Levron_1987 | irrelevant | 3 | 3 | The paper is a comparative review of long-acting neuroleptics that mentions clopenthixol decanoate only to provide a single qualitative half-life value (19 days) without a corresponding volume or compartmental model, lacking the quantitative population-PK parameters required. |
| PGx | Levron_1987 | not_relevant | 0 | 0 | The paper discusses pharmacokinetics of various neuroleptics but does not report any pharmacogenomic effects (gene variants) on clopenthixol. |
| popPK | Mortensen_1987 | irrelevant | 0 | 0 | The paper reports in vitro antibacterial activity (IC50) of clopenthixol and its metabolites, not pharmacokinetic parameters like clearance or volume. |
| PGx | Mortensen_1987 | not_relevant | 0 | 0 | The paper describes the antibacterial activity of clopenthixol and its metabolites in vitro and does not involve pharmacogenomics or PK/PD parameters. |
| popPK | Mortensen_1992 | irrelevant | 0 | 0 | This is an in-vitro study measuring antibacterial susceptibility (MIC/IC50) of neuroleptics to bacteria, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for clopenthixol. |
| PGx | Mortensen_1992 | not_relevant | 0 | 0 | The paper investigates the antibacterial activity of neuroleptics, not the pharmacokinetics or pharmacodynamics of the drugs in humans, and contains no genetic data. |
| popPK | Overø_1980 | irrelevant | 3 | 1 | The paper reports a new assay method and qualitative stability of serum levels over the dosing interval, but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Overø_1980 | not_relevant | 0 | 0 | The paper reports a method for assaying clopenthixol levels in serum but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Shehata_2000 | irrelevant | 0 | 0 | The paper describes a fluorimetric assay method for quantification, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Shehata_2000 | not_relevant | 0 | 0 | The paper describes a fluorimetric analytical method for measuring thioxanthene derivatives and does not investigate any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sieberns_1982 | irrelevant | 2 | 0 | The text describes a review of a different formulation (depot/cis-isomer) and contains no specific quantitative pharmacokinetic parameter values for the parent drug clopenthixol. |
| PGx | Sieberns_1982 | not_relevant | 0 | 0 | The paper is a general review of cis(Z)-clopenthixol decanoate's pharmacology and pharmacokinetics but does not report any pharmacogenomic effects or gene-variant interactions. |
| popPK | Spanarello_2014 | irrelevant | 0 | 0 | The paper is a review of long-acting antipsychotics that does not provide original quantitative pharmacokinetic parameter values for clopenthixol in the provided text. |
| PGx | Spanarello_2014 | not_relevant | 0 | 0 | The paper is a general review of the pharmacokinetics of depot antipsychotics, including clopenthixol, but does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Viala_1984 | relevant | 5 | 0 | The study describes PK kinetics of clopenthixol decanoate in humans, but the extracted evidence text contains no quantitative parameter values (no CL, V, or specific concentration numbers). |
| PGx | Viala_1984 | not_relevant | 0 | 0 | The study reports pharmacokinetic parameters but does not investigate or report any association with genetic variants, genotypes, or pharmacogenomic factors. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclopenthixol%5D&body=Drug%3A%20clopenthixol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_clopenthixol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 20:18 UTC</sub>
