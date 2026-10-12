<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;lisdexamfetamine&quot;}]"></div>

# lisdexamfetamine

- **generic name:** lisdexamfetamine
- **ATC codes:** `N06BA12`
- **DrugBank:** [DB01255](https://go.drugbank.com/drugs/DB01255) · **PubChem:** [CID 11597698](https://pubchem.ncbi.nlm.nih.gov/compound/11597698)
- **molar mass:** 263.3785 g/mol (C15H25N3O) — DrugBank
- **groups:** approved, investigational

## About

Lisdexamfetamine is a stimulant medicine used to treat attention deficit hyperactivity disorder, and also binge eating disorder and narcolepsy. It is an approved drug, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6558704](https://www.wikidata.org/wiki/Q6558704) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| d-amphetamine | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:52 | 12:39 | 0/1/0 | 2/0/0 | 0/0/0 | 492,821/22,740 | ollama / glm-5.3-flash | 19 | 10/3 | 18/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Comiran_2021_reference](drugs/drug_lisdexamfetamine/Lisdexamfetamine_Comiran2021_reference.md) | — | general linear (no model) | 0 | Comiran E et al., Lisdexamfetamine and amphetamine pharma…, Biopharmaceutics & drug dis… (2021) | [10.1002/bdd.2254](https://doi.org/10.1002/bdd.2254) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_DBP](drugs/drug_lisdexamfetamine/pd_Richards_2017_DBP.md) | Change from augmentation baseline in diastolic blood pressure ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_MADRS_total_score](drugs/drug_lisdexamfetamine/pd_Richards_2017_MADRS_total_score.md) | Montgomery-Åsberg Depression Rating Scale total score change from augmentation baseline ← lisdexamfetamine dimesylate · model not identified | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_Pulse](drugs/drug_lisdexamfetamine/pd_Richards_2017_Pulse.md) | Change from augmentation baseline in pulse ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_SBP](drugs/drug_lisdexamfetamine/pd_Richards_2017_SBP.md) | Change from augmentation baseline in systolic blood pressure ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tsuda_2020_ADHD_RS_IV](drugs/drug_lisdexamfetamine/pd_Tsuda_2020_ADHD_RS_IV.md) | ADHD Rating Scale IV (ADHD RS-IV) total score ← d-amphetamine · inhibition effect | — | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2020) | [10.1016/j.dmpk.2020.08.005](https://doi.org/10.1016/j.dmpk.2020.08.005) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 52 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tsuda_2020.pdf` | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2020) | popPK | 10 | [10.1016/j.dmpk.2020.08.005](https://doi.org/10.1016/j.dmpk.2020.08.005) | [33082099](https://pubmed.ncbi.nlm.nih.gov/33082099) | Population PK model of d-amphetamine (the active metabolite released from lisdexamfetamine) after lisdexamfetamine dosing, but numeric parameter values are not shown in the provided evidence. |
| `Comiran_2021.pdf` | Comiran E et al., Lisdexamfetamine and amphetamine pharma…, Biopharmaceutics & drug dis… (2021) | popPK | 8 | [10.1002/bdd.2254](https://doi.org/10.1002/bdd.2254) | [33119133](https://pubmed.ncbi.nlm.nih.gov/33119133) | Original human PK study of LDX and its metabolite d-AMPH with compartmental modeling, but only Tmax and relative Cmax values appear in the abstract; CL/V/ka values are not shown and may live in tables/figures not provided. |
| `Rowley_2012.pdf` | Rowley HL et al., Lisdexamfetamine and immediate release…, Neuropharmacology (2012) | popPK | 6 | [10.1016/j.neuropharm.2012.07.008](https://doi.org/10.1016/j.neuropharm.2012.07.008) | [22796358](https://pubmed.ncbi.nlm.nih.gov/22796358) | Rat PK/PD study of lisdexamfetamine reporting comparative plasma d-amfetamine parameters (AUC, Cmax, tmax) in the abstract, but full numeric values likely in figures/results not provided. |

<sub>queue written 2026-10-07T00:46:29.591943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmed_2022 | not_relevant | 2 | 1 | Lisdexamfetamine is only listed as a prescribed drug frequency; no gene variant effect on PK/PD parameters is reported. |
| popPK | Cheung_2026 | irrelevant | 0 | 0 | Case series of dextromethorphan/fluoxetine for PTSD; no lisdexamfetamine PK parameters reported. |
| popPK | Childress_2022 | irrelevant | 0 | 0 | Efficacy/safety trial with no PK parameters (no CL, V, ka, half-life, or PK model) reported for lisdexamfetamine. |
| popPK | Dolder_2017 | relevant | 8 | 3 | Human crossover study with compartmental PK modeling of amphetamine (the active metabolite) after lisdexamfetamine dosing, but the numeric parameter values are in Table 1/Supplementary Table S1, which are not included in the evidence. |
| PGx | Ermer_2015 | not_relevant | 0 | 0 | This is a drug–drug interaction study of LDX on CYP substrates; no gene variant/genotype/phenotype effects on PK/PD are reported. |
| popPK | Farhat_2026 | irrelevant | 0 | 0 | Efficacy meta-analysis of stimulants in preschool ADHD with no pharmacokinetic parameters reported. |
| popPK | Heal_2016 | irrelevant | 0 | 0 | Behavioral pharmacology study in rats with no PK parameters reported. |
| popPK | Kay_2025 | irrelevant | 0 | 0 | This is an fMRI connectivity study of stimulants (mainly methylphenidate); lisdexamfetamine is only mentioned as one stimulant among others, with no PK parameters anywhere. |
| popPK | Khan_2026 | irrelevant | 0 | 0 | This is a pharmacovigilance study of adverse drug withdrawal events with no PK parameters for lisdexamfetamine or any drug. |
| PGx | Krishnan_2007 | not_relevant | 0 | 0 | In vitro P450 inhibition study with pooled microsomes; no gene variant/genotype effect on lisdexamfetamine PK/PD reported. |
| popPK | McElroy_2015 | irrelevant | 0 | 0 | This is an efficacy/safety clinical trial with no pharmacokinetic parameters (CL, V, ka, half-life, or PK model) reported for lisdexamfetamine. |
| popPK | McElroy_2016 | irrelevant | 0 | 0 | This is a clinical efficacy/safety trial of lisdexamfetamine in binge eating disorder with no PK parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | McElroy_2017 | irrelevant | 0 | 0 | This is an efficacy time-course study of lisdexamfetamine in binge-eating disorder with no PK parameters (no CL, V, ka, half-life, or PK model) reported. |
| popPK | Newcorn_2017 | irrelevant | 0 | 0 | This is a comparative efficacy/safety trial of LDX vs OROS-MPH in adolescents with ADHD; no PK parameters (CL, V, ka, half-life, or PK model) are reported. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | This is a FAERS pharmacovigilance disproportionality study of ADHD drugs; lisdexamfetamine is only one of several agents analyzed for adverse-event signals, with no PK parameters reported. |
| popPK | Resendal_2026 | irrelevant | 0 | 0 | This is a study protocol for measuring various medications in breast milk; lisdexamfetamine is not the subject drug and no PK parameter values are present. |
| popPK | Rowley_2012 | relevant | 6 | 4 | Rat PK/PD study of lisdexamfetamine reporting comparative plasma d-amfetamine parameters (AUC, Cmax, tmax) in the abstract, but full numeric values likely in figures/results not provided. |
| popPK | Salama_2025 | irrelevant | 0 | 0 | This is a retrospective chart review of weight/BMI outcomes in children on lisdexamfetamine, with no pharmacokinetic parameters reported. |
| popPK | Shanmugan_2017 | irrelevant | 0 | 0 | Neuroimaging study of LDX effects on brain activation and glutamate; no PK disposition parameters (CL, V, ka, half-life) reported. |
| popPK | Sheehan_2018 | irrelevant | 0 | 0 | Clinical efficacy trial on disability scale outcomes with no pharmacokinetic parameters for lisdexamfetamine. |
| popPK | Simon_2025 | irrelevant | 0 | 0 | Narrative review on plasma concentration utility; lisdexamfetamine only mentioned qualitatively as a prodrug example, no PK parameters reported. |
| popPK | Tsuda_2020 | relevant | 10 | 3 | Population PK model of d-amphetamine (the active metabolite released from lisdexamfetamine) after lisdexamfetamine dosing, but numeric parameter values are not shown in the provided evidence. |
| PGx | Ward_2018 | not_relevant | 0 | 0 | Text is a copyright/license agreement form with no pharmacogenomic or PK/PD content. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:46 UTC</sub>
