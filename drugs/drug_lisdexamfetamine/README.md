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

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

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
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Comiran_2021_reference](drugs/drug_lisdexamfetamine/Lisdexamfetamine_Comiran2021_reference.md) | — | general linear (no model) | 0 | Comiran E et al., Lisdexamfetamine and amphetamine pharma…, Biopharmaceutics & drug dis… (2021) | [10.1002/bdd.2254](https://doi.org/10.1002/bdd.2254) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_DBP](drugs/drug_lisdexamfetamine/pd_Richards_2017_DBP.md) | Change from augmentation baseline in diastolic blood pressure ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_MADRS_total_score](drugs/drug_lisdexamfetamine/pd_Richards_2017_MADRS_total_score.md) | Montgomery-Åsberg Depression Rating Scale total score change from augmentation baseline ← lisdexamfetamine dimesylate · model not identified | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_Pulse](drugs/drug_lisdexamfetamine/pd_Richards_2017_Pulse.md) | Change from augmentation baseline in pulse ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Richards_2017_SBP](drugs/drug_lisdexamfetamine/pd_Richards_2017_SBP.md) | Change from augmentation baseline in systolic blood pressure ← lisdexamfetamine dimesylate · direct linear effect | — | Richards C et al., A randomized, double-blind, placebo-con…, Journal of psychopharmacolo… (2017) | [10.1177/0269881117722998](https://doi.org/10.1177/0269881117722998) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tsuda_2020_ADHD_RS_IV](drugs/drug_lisdexamfetamine/pd_Tsuda_2020_ADHD_RS_IV.md) | ADHD Rating Scale IV (ADHD RS-IV) total score ← d-amphetamine · inhibition effect | — | Tsuda Y et al., Population pharmacokinetic and exposure…, Drug metabolism and pharmac… (2020) | [10.1016/j.dmpk.2020.08.005](https://doi.org/10.1016/j.dmpk.2020.08.005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lisdexamfetamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TAAR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 52 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

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
