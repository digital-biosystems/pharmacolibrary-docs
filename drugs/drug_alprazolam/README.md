<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05B&quot;,&quot;href&quot;:&quot;atc/N05B.md&quot;},{&quot;label&quot;:&quot;alprazolam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Mertes2022_reference&quot;,&quot;label&quot;:&quot;Mertes_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_alprazolam/Alprazolam_Mertes2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Witt_2026_RGR&quot;,&quot;label&quot;:&quot;Witt_2026 \u00b7 RGR&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_alprazolam/pd_Witt_2026_RGR.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# alprazolam

- **generic name:** alprazolam
- **ATC codes:** `N05BA12`
- **DrugBank:** [DB00404](https://go.drugbank.com/drugs/DB00404) · **PubChem:** [CID 2118](https://pubchem.ncbi.nlm.nih.gov/compound/2118)
- **molar mass:** 308.765 g/mol (C17H13ClN4) — DrugBank
- **groups:** approved, illicit, investigational

## About

Alprazolam is a short-acting benzodiazepine anxiolytic used to treat anxiety and panic disorders, and also for conditions such as insomnia. It is an approved medicine that is widely used, though it carries a boxed warning and is also encountered as an illicit drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q319877](https://www.wikidata.org/wiki/Q319877) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alprazolam | parent | 308.765 | C17H13ClN4 | DrugBank | [2118](https://pubchem.ncbi.nlm.nih.gov/compound/2118) | Klein_2026, Venkatakrishnan_2005 |
| adinazolam | metabolite | 351.838 | C19H18ClN5 | PubChem | [37632](https://pubchem.ncbi.nlm.nih.gov/compound/37632) | Venkatakrishnan_2005 |
| N-desmethyl adinazolam | metabolite | 337.811 | C18H16ClN5 | PubChem | [119094](https://pubchem.ncbi.nlm.nih.gov/compound/119094) | Venkatakrishnan_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 22:12 | 8:39 | 1/1/2 | 6/1/0 | 0/0/0 | 322,308/56,440 | einfracz / qwen3.8-27b | 15 | 2/10 | 13/2 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Mertes_2022_reference](drugs/drug_alprazolam/Alprazolam_Mertes2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Mertes P et al., LEAF- 4L6715 enhances oxygenation in pa… (2022) | [10.1101/2022.09.07.22279668](https://doi.org/10.1101/2022.09.07.22279668) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Klein_2026_reference](drugs/drug_alprazolam/Alprazolam_Klein2026_reference.md) | — | 1-compartment (no model) | 2 | Klein P et al., Pharmacokinetics and tolerability of si…, Epilepsia (2026) | [10.1111/epi.18643](https://doi.org/10.1111/epi.18643) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Venkatakrishnan_2005_reference](drugs/drug_alprazolam/Alprazolam_Venkatakrishnan2005_reference.md) | — | parent + metabolite (no model) | 3 | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [DeVane_1993_reference](drugs/drug_alprazolam/Alprazolam_DeVane1993_reference.md) | — | 1-compartment (no model) | 0 | DeVane CL et al., Evaluation of population pharmacokineti…, Clinical pharmacology and t… (1993) | [10.1038/clpt.1993.65](https://doi.org/10.1038/clpt.1993.65) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_activity](drugs/drug_alprazolam/pd_Barbanoj_2007_activity.md) | activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_correct_number_of_responses](drugs/drug_alprazolam/pd_Barbanoj_2007_correct_number_of_responses.md) | correct number of responses ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_drowsiness](drugs/drug_alprazolam/pd_Barbanoj_2007_drowsiness.md) | drowsiness ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_relative_alpha_activity](drugs/drug_alprazolam/pd_Barbanoj_2007_relative_alpha_activity.md) | relative alpha activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_relative_beta_1_activity](drugs/drug_alprazolam/pd_Barbanoj_2007_relative_beta_1_activity.md) | relative beta-1 activity ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Barbanoj_2007_total_number_of_responses](drugs/drug_alprazolam/pd_Barbanoj_2007_total_number_of_responses.md) | total number of responses ← alprazolam · model not identified | — | Barbanoj MJ et al., Different acute tolerance development t…, Neuropsychobiology (2007) | [10.1159/000108379](https://doi.org/10.1159/000108379) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kaplan_2000_EEG_relative_beta_amplitude](drugs/drug_alprazolam/pd_Kaplan_2000_EEG_relative_beta_amplitude.md) | electroencephalographic (EEG) measure of relative beta amplitude ← alprazolam · direct sigmoid Emax (Hill) effect | — | Kaplan GB et al., Differences in pharmacodynamics but not…, Journal of clinical psychop… (2000) | [10.1097/00004714-200006000-00008](https://doi.org/10.1097/00004714-200006000-00008) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kroboth_1988_DSS](drugs/drug_alprazolam/pd_Kroboth_1988_DSS.md) | Digit symbol substitution (DSS) ← alprazolam · direct Emax (saturable) effect | — | Kroboth PD et al., Tolerance to alprazolam after intraveno…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.32](https://doi.org/10.1038/clpt.1988.32) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Kroboth_1988_SE](drugs/drug_alprazolam/pd_Kroboth_1988_SE.md) | spectral edge (SE) ← alprazolam · direct Emax (saturable) effect | — | Kroboth PD et al., Tolerance to alprazolam after intraveno…, Clinical pharmacology and t… (1988) | [10.1038/clpt.1988.32](https://doi.org/10.1038/clpt.1988.32) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lau_1997_shorter_response_rate](drugs/drug_alprazolam/pd_Lau_1997_shorter_response_rate.md) | shorter-response rate ← alprazolam · direct Emax (saturable) effect | — | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--green">extracted</span> | [Venkatakrishnan_2005_DSST](drugs/drug_alprazolam/pd_Venkatakrishnan_2005_DSST.md) | Digit Symbol Substitution Test (DSST) performance ← alprazolam · direct linear effect | — | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Venkatakrishnan_2005_EEG](drugs/drug_alprazolam/pd_Venkatakrishnan_2005_EEG.md) | beta EEG activity ← alprazolam · direct sigmoid Emax (Hill) effect | — | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wright_1997_psychomotor_performance](drugs/drug_alprazolam/pd_Wright_1997_psychomotor_performance.md) | psychomotor performance ← alprazolam · direct sigmoid Emax (Hill) effect | — | Wright CE et al., Pharmacokinetics and psychomotor perfor…, Journal of clinical pharmac… (1997) | [10.1002/j.1552-4604.1997.tb04309.x](https://doi.org/10.1002/j.1552-4604.1997.tb04309.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lau_1997_reinforcement_rate](drugs/drug_alprazolam/pd_Lau_1997_reinforcement_rate.md) | reinforcement rate ← alprazolam · indirect response — drug inhibits the production of reinforcement rate | model (no simulator) | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Witt_2026_RGR](drugs/drug_alprazolam/pd_Witt_2026_RGR.md) | Relative growth rate ← alprazolam · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Witt NGPM et al., Ecotoxicological Effects of Psychoactiv…, Toxics (2026) | [10.3390/toxics14050420](https://doi.org/10.3390/toxics14050420) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=alprazolam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 445 matched, 140 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 1  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DeVane_1993.pdf` | DeVane CL et al., Evaluation of population pharmacokineti…, Clinical pharmacology and t… (1993) | popPK | 10 | [10.1038/clpt.1993.65](https://doi.org/10.1038/clpt.1993.65) | [8491063](https://pubmed.ncbi.nlm.nih.gov/8491063) | The study reports quantitative population PK parameters (CL, V, ka) for alprazolam in humans with values explicitly stated in the abstract. |
| `Hossain_1997.pdf` | Hossain M et al., Nonlinear mixed effects modeling of sin…, Pharmaceutical research (1997) | popPK | 10 | [10.1023/a:1012041920119](https://doi.org/10.1023/a:1012041920119) | [9098872](https://pubmed.ncbi.nlm.nih.gov/9098872) | The abstract describes a population PK model for alprazolam with quantitative effects (e.g., smoking increases clearance by 100%), but specific numeric parameter values are not present in the provided text. |
| `Grasela_1986.pdf` | Grasela TH et al., An evaluation of population pharmacokin…, Clinical pharmacology and t… (1986) | popPK | 9 | [10.1038/clpt.1986.107](https://doi.org/10.1038/clpt.1986.107) | [3709024](https://pubmed.ncbi.nlm.nih.gov/3709024) | The study reports population pharmacokinetic parameters (clearance and volume of distribution) for alprazolam, but specific numeric values are not included in the provided evidence text. |
| `Venkatakrishnan_2005.pdf` | Venkatakrishnan K et al., Kinetics and dynamics of intravenous ad…, Journal of clinical pharmac… (2005) | popPK | 9 | [10.1177/0091270004269105](https://doi.org/10.1177/0091270004269105) | [15831776](https://pubmed.ncbi.nlm.nih.gov/15831776) | The study reports specific quantitative pharmacokinetic parameters (clearance, volume of distribution, and half-life) for alprazolam in healthy human volunteers. |
| `Wright_1997.pdf` | Wright CE et al., Pharmacokinetics and psychomotor perfor…, Journal of clinical pharmac… (1997) | popPK | 9 | [10.1002/j.1552-4604.1997.tb04309.x](https://doi.org/10.1002/j.1552-4604.1997.tb04309.x) | [9115058](https://pubmed.ncbi.nlm.nih.gov/9115058) | The study describes a PK investigation with qualitative trends (linear, no significant difference in clearance) but lacks specific numeric values for CL, V, or ka in the provided text. |
| `Lau_1997_2.pdf` | Lau CE et al., Differential reinforcement of low rate…, The Journal of pharmacology… (1997) | popPK | 8 | not captured | [9190832](https://pubmed.ncbi.nlm.nih.gov/9190832) | The paper is a PK/PD study of alprazolam in humans, but the evidence provided only lists half-lives (t1/2), while the requested quantitative disposition parameters (CL, V, Q, ka) and model details are not present in the text. |
| `Burkat_2023.pdf` | Burkat PM, Physiologically based pharmacokinetic a…, British journal of clinical… (2023) | popPK | 6 | [10.1111/bcp.15719](https://doi.org/10.1111/bcp.15719) | [36946233](https://pubmed.ncbi.nlm.nih.gov/36946233) | The study develops a PBPK model for alprazolam and reports derived concentration metrics (peak brain concentrations, rise times) rather than standard clearance or volume parameters. |
| `Kaplan_2000.pdf` | Kaplan GB et al., Differences in pharmacodynamics but not…, Journal of clinical psychop… (2000) | popPK | 6 | [10.1097/00004714-200006000-00008](https://doi.org/10.1097/00004714-200006000-00008) | [10831021](https://pubmed.ncbi.nlm.nih.gov/10831021) | The study reports pharmacokinetic parameters (clearance, volume, half-life) for alprazolam in humans, but the specific numeric values are not present in the provided text. |
| `Lau_1997.pdf` | Lau CE et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1997) | popPK | 6 | not captured | [9399984](https://pubmed.ncbi.nlm.nih.gov/9399984) | The study develops a PK-PD model for alprazolam in rats, but the provided evidence contains only PD parameters (EC50, IC50) and qualitative PK descriptions without explicit numeric values for CL, V, or Ka. |
| `Kroboth_1988.pdf` | Kroboth PD et al., Tolerance to alprazolam after intraveno…, Clinical pharmacology and t… (1988) | popPK | 5 | [10.1038/clpt.1988.32](https://doi.org/10.1038/clpt.1988.32) | [3345619](https://pubmed.ncbi.nlm.nih.gov/3345619) | The study reports a pharmacodynamic tolerance rate constant (kt) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for alprazolam. |

<sub>queue written 2026-10-14T22:05:11.760169+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ambrosio_2018 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions affecting morphine metabolism, not the pharmacogenomics of alprazolam. |
| popPK | Ammit_1991 | irrelevant | 0 | 0 | The paper studies alprazolam as a PAF receptor antagonist in an in vitro platelet aggregation assay, not its pharmacokinetics. |
| popPK | Antal_1989 | irrelevant | 2 | 0 | The paper describes a methodological evaluation of data collection techniques for population PK and contains no specific numeric parameter values for alprazolam. |
| popPK | Baumann_1996 | irrelevant | 0 | 0 | The paper is a review on SSRI pharmacokinetics and metabolism, mentioning alprazolam only as a drug involved in CYP3A interactions, without reporting any PK parameters for alprazolam. |
| PGx | Baumann_1996 | not_relevant | 1 | 0 | The text mentions a CYP3A-mediated interaction between fluoxetine and alprazolam but does not report a pharmacogenomic effect of a gene variant on alprazolam PK/PD parameters. |
| popPK | Bertz_1997 | relevant | 3 | 2 | The study reports qualitative changes in clearance and elimination half-life (longer/lower) but lacks specific numeric PK parameter values (e.g., CL in L/hr, Vd in L) in the provided abstract. |
| PGx | Boulenc_2016 | not_relevant | 0 | 0 | The paper studies a drug-drug interaction (ketoconazole) and PK properties, but does not report any effect of a gene variant or genotype on alprazolam pharmacokinetics. |
| popPK | Burkat_2023 | relevant | 6 | 4 | The study develops a PBPK model for alprazolam and reports derived concentration metrics (peak brain concentrations, rise times) rather than standard clearance or volume parameters. |
| PGx | Chan_2020 | not_relevant | 0 | 0 | The paper reports in vitro CYP3A inhibition of alprazolam metabolism by erythromycin; it does not report any pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| PGx | Chen_2020 | not_relevant | 0 | 0 | The paper evaluates drug-herb interactions (red clover vs alprazolam PK), not the effect of genetic variants or genotypes on pharmacokinetics. |
| popPK | Chetty_2012 | irrelevant | 2 | 0 | The paper focuses on sample size estimation for sex differences in clearance using in vitro data and simulations, rather than reporting measured quantitative PK parameter values for alprazolam. |
| PGx | Chetty_2012 | not_relevant | 1 | 1 | The paper investigates sex differences (non-genomic) in the clearance of CYP3A4 substrates using population PK modeling and simulation, rather than reporting the impact of a specific gene variant or genotype on alprazolam PK. |
| PGx | DSouza_2001 | not_relevant | 0 | 0 | The study investigates the drug-drug interaction between alosetron and alprazolam, not a pharmacogenomic effect based on gene variants/genotypes. |
| PGx | Di_2008 | not_relevant | 0 | 0 | The paper is a review of St. John's Wort drug interactions and does not report on pharmacogenomic effects (gene variants) on alprazolam pharmacokinetics or pharmacodynamics. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | This is a general review of CYP3A4 interactions; alprazolam is mentioned only as an example of a benzodiazepine substrate, with no original PK data or quantitative parameters reported. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The text discusses pharmacokinetic interactions due to CYP3A4 inhibition by external drugs, not the effect of a specific gene variant/genotype on alprazolam PK/PD. |
| PGx | Ellingrod_1995 | not_relevant | 2 | 0 | The paper mentions alprazolam only as a drug that may be affected by nefazodone's CYP3A4 inhibition (drug-drug interaction), not in the context of a specific gene variant changing alprazolam's PK/PD. |
| popPK | Ferrer_2025 | irrelevant | 0 | 0 | The paper focuses on the antioxidant and anticancer properties of Oolong tea compounds and does not study alprazolam pharmacokinetics. |
| PGx | Fields_2015 | not_relevant | 0 | 0 | The paper reports drug-drug interactions (benzodiazepines affecting opioid PK), not pharmacogenomic effects of alprazolam. |
| popPK | File_1986 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment (place-conditioning in rats) assessing the reinforcing properties of alprazolam, with no pharmacokinetic parameters reported. |
| popPK | Fleishaker_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of reboxetine, and alprazolam is only mentioned as a probe drug in an interaction study to confirm the lack of CYP3A4 inhibition. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The paper reports that reboxetine does not affect the metabolism of alprazolam, and it does not investigate how genetic variants alter alprazolam's PK/PD. |
| PGx | Fukasawa_2007 | not_relevant | 3 | 0 | The paper is a review that mentions CYP3A5 polymorphism affects alprazolam but provides no specific data, effect sizes, or extractable quantitative results. |
| PGx | Furukori_1998 | not_relevant | 0 | 0 | The study examines a drug-drug interaction (carbamazepine) rather than a pharmacogenomic effect involving a gene variant, genotype, or phenotype. |
| popPK | Gaudêncio_2023 | irrelevant | 0 | 0 | The paper is a review on methods for natural products discovery (screening, dereplication, structure elucidation) and does not report pharmacokinetic parameters for alprazolam. |
| popPK | Grasela_1986 | relevant | 9 | 0 | The study reports population pharmacokinetic parameters (clearance and volume of distribution) for alprazolam, but specific numeric values are not included in the provided evidence text. |
| popPK | Grasela_1987 | irrelevant | 2 | 0 | Alprazolam is a co-administered drug used to evaluate an interaction, and the specific quantitative PK parameters reported (20% decrease) apply to imipramine, not alprazolam. |
| PGx | Greenblatt_1993 | not_relevant | 1 | 0 | The text explicitly states that the cytochrome P450 subfamily mediating alprazolam metabolism is not subject to genetic polymorphism and does not report pharmacogenomic effects. |
| PGx | Greene_1997 | not_relevant | 0 | 0 | The paper is about the pharmacokinetics of nefazodone and mentions alprazolam only in the context of a drug-drug interaction with nefazodone, but does not report any pharmacogenomic effects on alprazolam. |
| popPK | Gurley_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of GABA receptor mutations and alprazolam is only a comparator modulator, not the subject of a PK study. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Hascoët_1998 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment assessing anxiolytic effects in mice, not a pharmacokinetic study reporting disposition parameters for alprazolam. |
| popPK | Hossain_1997 | relevant | 10 | 0 | The abstract describes a population PK model for alprazolam with quantitative effects (e.g., smoking increases clearance by 100%), but specific numeric parameter values are not present in the provided text. |
| PGx | Hossain_1997 | not_relevant | 0 | 0 | The paper focuses on cigarette smoking as a covariate for alprazolam clearance, not on genetic variants or pharmacogenomic factors. |
| PGx | Hsu_1998 | not_relevant | 0 | 0 | The paper discusses ritonavir's pharmacokinetics and interactions, noting alprazolam was unaffected, but does not report a gene variant/genotype effect on alprazolam PK/PD. |
| popPK | Hu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor development in cell cultures and does not report pharmacokinetic parameters for alprazolam. |
| PGx | Huang_2018 | not_relevant | 0 | 0 | The study investigates the effect of ethanol (a drug/chemical interaction) on alprazolam PK, not the effect of a specific gene variant or genotype. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper focuses on the physicochemical properties and membrane interactions of PROTACs and does not contain any pharmacokinetic data for alprazolam. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The provided text is a table of case reports regarding interactions between herbal medicines (such as St. John's wort, Ginkgo, Kava) and various prescribed drugs. It does not report on pharmacogenomic effects (gene variant/genotype/phenotype changes) on the pharmacokinetic or pharmacodynamic parameters of alprazolam. |
| PGx | Jones_2007 | not_relevant | 1 | 0 | The paper is a forensic toxicology case series reporting general drug concentrations in blood and discusses pharmacogenomics only as a general preanalytical consideration without reporting any specific genotype-PK/PD data for alprazolam. |
| popPK | Kaplan_2000 | relevant | 6 | 0 | The study reports pharmacokinetic parameters (clearance, volume, half-life) for alprazolam in humans, but the specific numeric values are not present in the provided text. |
| popPK | Kozlowski_1988 | irrelevant | 0 | 0 | The study reports pharmacodynamic and binding data (IC50) for alprazolam, but provides no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kroboth_1988 | irrelevant | 5 | 0 | The study reports a pharmacodynamic tolerance rate constant (kt) but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka) for alprazolam. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of haloperidol and its drug interactions, but does not report specific pharmacogenomic effects on the PK or PD parameters of alprazolam. |
| popPK | Lasher_1991 | irrelevant | 3 | 0 | The study reports a relative change in plasma concentrations due to interaction but lacks explicit numeric disposition parameters (CL, V, ka) for alprazolam. |
| popPK | Lau_1997 | relevant | 6 | 2 | The study develops a PK-PD model for alprazolam in rats, but the provided evidence contains only PD parameters (EC50, IC50) and qualitative PK descriptions without explicit numeric values for CL, V, or Ka. |
| popPK | Lau_1997_2 | relevant | 8 | 1 | The paper is a PK/PD study of alprazolam in humans, but the evidence provided only lists half-lives (t1/2), while the requested quantitative disposition parameters (CL, V, Q, ka) and model details are not present in the text. |
| popPK | Lau_1998 | irrelevant | 1 | 0 | The study focuses on the PK/PD modeling of midazolam in rats, mentioning alprazolam only as a methodological comparator without reporting specific quantitative PK parameters for it. |
| popPK | Leonard_2008 | irrelevant | 0 | 0 | The study investigates the pharmacology of neuropeptide S in mice, using alprazolam only as a reference comparator agent without reporting any pharmacokinetic parameters for alprazolam. |
| popPK | Levy-Cooperman_2016 | irrelevant | 1 | 0 | The study evaluates abuse liability and PK of eslicarbazepine, using alprazolam only as a comparator without reporting its quantitative disposition parameters. |
| popPK | Lyauk_2020 | irrelevant | 0 | 0 | The paper focuses on Item Response Theory modeling of symptom scores for degarelix in BPH patients and contains no pharmacokinetic parameters for alprazolam. |
| popPK | Mehta_1992 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor binding and ion flux, not a pharmacokinetic study, and alprazolam is used only as a ligand. |
| popPK | Mertes_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for LEAF-4L6715 (transcrocetin), not alprazolam. |
| popPK | Montero_1993 | irrelevant | 0 | 0 | Alprazolam is used as a pharmacological antagonist in a cellular study, not for pharmacokinetic evaluation. |
| popPK | Moon_1990 | irrelevant | 0 | 0 | Alprazolam is used only as an in-vitro PAF receptor antagonist in a sheep platelet bioassay; no pharmacokinetic parameters are reported. |
| PGx | Nicolussi_2020 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with St. John's wort, not the effect of a specific gene variant or genotype on pharmacokinetics. |
| PGx | Ogawa_2013 | not_relevant | 0 | 0 | The paper focuses on interspecies prediction of clearance from monkey to human models and does not report pharmacogenomic effects or genotype-specific PK parameters for alprazolam. |
| PGx | Ohtsuka_2010 | not_relevant | 0 | 0 | The study investigates the pharmacokinetic effect of enzyme induction (rifampicin) in cynomolgus monkeys, not the effect of a specific human gene variant or genotype on alprazolam's PK/PD. |
| PGx | Otani_2003 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP3A4 but does not report pharmacogenomic effects of gene variants on alprazolam. |
| popPK | Robertson_1987 | irrelevant | 0 | 0 | The paper is a pharmacological study on the negative inotropic effects of PAF, and alprazolam is used only as a non-specific antagonist to characterize receptor specificity, with no pharmacokinetic parameters reported. |
| PGx | Rodríguez-Antona_2005 | not_relevant | 4 | 2 | The study examines the effect of CYP3A variants on alprazolam metabolism (1-hydroxylation rate) in fetal liver microsomes, but it does not report in vivo pharmacokinetic (PK) or pharmacodynamic (PD) parameters (e.g., Cmax, AUC) in humans. |
| PGx | Roedler_2007 | not_relevant | 0 | 0 | The paper reports on a drug-drug interaction (metronidazole inhibiting/interacting with CYP3A substrates), not a pharmacogenomic effect of a gene variant on alprazolam PK/PD. |
| popPK | Sanna_1999 | irrelevant | 0 | 0 | This is a pharmacodynamic and neurochemical study comparing etizolam and alprazolam on GABA receptors, with no pharmacokinetic parameters reported. |
| PGx | Schmider_1996 | not_relevant | 0 | 0 | The paper studies in vitro antibody inhibition of CYP enzymes using alprazolam as a probe substrate, not the impact of genetic variants on alprazolam pharmacokinetics or pharmacodynamics. |
| popPK | Schoedel_2017 | irrelevant | 0 | 0 | The study focuses on the abuse potential of lacosamide with alprazolam serving only as an active comparator, and no PK parameters are reported. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | The study focuses on the abuse potential of brivaracetam using alprazolam as a positive control, and reports subjective effect scales rather than pharmacokinetic parameters like clearance or volume. |
| popPK | Schoedel_2018_2 | irrelevant | 0 | 0 | The study focuses on the abuse potential and pharmacokinetics of cannabidiol (CBD), using alprazolam only as an active comparator, and does not report quantitative disposition parameters for alprazolam. |
| PGx | Sierra_2024 | not_relevant | 0 | 0 | The study focuses on in vitro-to-in vivo extrapolation scalars for liver disease (NAFLD/NASH) and does not investigate the impact of genetic variants (pharmacogenomics) on alprazolam pharmacokinetics. |
| PGx | Sproule_1997 | not_relevant | 2 | 1 | The paper reviews drug-drug interactions (SSRIs affecting alprazolam PK) and mentions CYP phenotyping as a factor, but does not report specific pharmacogenomic effects (gene variant -&gt; PK change) for alprazolam. |
| PGx | Stolbach_2015 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between HIV medications and alprazolam, not pharmacogenomic effects of genetic variants on alprazolam PK/PD. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper reviews pharmacokinetic drug-drug interactions between antifungals and alprazolam, not the effect of gene variants on alprazolam pharmacokinetics. |
| PGx | Venkatakrishnan_2006 | not_relevant | 10 | 0 | Only the title is provided, lacking any data, results, or text to extract specific pharmacogenomic effects. |
| popPK | Wilbraham_2020 | irrelevant | 2 | 4 | The study is primarily an abuse potential trial for lasmiditan, with alprazolam serving only as a positive control, and key PK parameters (Cmax, AUC, t1/2) are in non-compartmental analysis, not population modeling. |
| popPK | Witt_2026 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of alprazolam's effects on Lemna minor (duckweed) in an aquatic environment, not a pharmacokinetic study measuring disposition parameters like clearance or volume. |
| popPK | Wright_1997 | relevant | 9 | 2 | The study describes a PK investigation with qualitative trends (linear, no significant difference in clearance) but lacks specific numeric values for CL, V, or ka in the provided text. |
| PGx | Zhao_2022 | not_relevant | 4 | 5 | The paper reports *in vitro* metabolism rates (formation of metabolites) by recombinant enzymes, not in vivo pharmacokinetic parameters (e.g., clearance, AUC) or pharmacodynamic effects. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PGx | van_1995 | not_relevant | 0 | 0 | The paper discusses fluvoxamine pharmacokinetics and its interaction with alprazolam, but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 22:08 UTC</sub>
