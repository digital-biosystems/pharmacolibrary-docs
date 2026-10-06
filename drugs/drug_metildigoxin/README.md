<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01A&quot;,&quot;href&quot;:&quot;atc/C01A.md&quot;},{&quot;label&quot;:&quot;metildigoxin&quot;}]"></div>

# metildigoxin

- **generic name:** metildigoxin
- **ATC codes:** `C01AA08`
- **DrugBank:** [DB13401](https://go.drugbank.com/drugs/DB13401) · **PubChem:** not captured
- **molar mass:** 794.976 g/mol (C42H66O14) — DrugBank
- **groups:** investigational

## About

Metildigoxin is a digitalis cardiac glycoside with cardiotonic and antiarrhythmic activity, studied for heart conditions such as heart failure and rhythm disorders. It is considered investigational and does not appear to have an authorised marketing authorisation in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q550017](https://www.wikidata.org/wiki/Q550017) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 03:11 | 0:51 | 0/1/0 | 0/0/0 | 0/0/0 | 21,792/1,300 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Hinderling_1977_reference](drugs/drug_metildigoxin/Metildigoxin_Hinderling1977_reference.md) | — | parent + metabolite (no model) | 0 | Hinderling PH et al., Pharmacokinetics of beta-methyldigoxin…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600660304](https://doi.org/10.1002/jps.2600660304) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hinderling_1977.pdf` | Hinderling PH et al., Pharmacokinetics of beta-methyldigoxin…, Journal of pharmaceutical s… (1977) | popPK | 10 | [10.1002/jps.2600660304](https://doi.org/10.1002/jps.2600660304) | [845795](https://pubmed.ncbi.nlm.nih.gov/845795) | The study reports quantitative pharmacokinetic parameters (absorption half-life, bioavailability, excretion percentages) for beta-methyldigoxin in humans, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Twittenhoff_1981.pdf` | Twittenhoff WD et al., Extrarenal clearance, distribution volu…, International journal of cl… (1981) | popPK | 10 | not captured | [7298247](https://pubmed.ncbi.nlm.nih.gov/7298247) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, elimination rate, half-life) for metildigoxin in anuric patients. |
| `Yukawa_1995.pdf` | Yukawa E, New and simple method for estimating me…, International journal of cl… (1995) | popPK | 9 | not captured | [8688985](https://pubmed.ncbi.nlm.nih.gov/8688985) | The study reports a population PK model for metildigoxin clearance in humans, but specific numeric parameter estimates (e.g., typical clearance values) are not explicitly listed in the provided text, only variability coefficients. |
| `Angelino_1977.pdf` | Angelino PF et al., [Kinetics of beta-methyl-digoxin in var…, Giornale italiano di cardio… (1977) | popPK | 8 | not captured | [892276](https://pubmed.ncbi.nlm.nih.gov/892276) | The study reports quantitative clearance rates for metildigoxin in humans, but specific numeric values are not present in the provided abstract text. |
| `Dotti_1977.pdf` | Dotti C et al., Study of the influence of haemodialysis…, La Ricerca in clinica e in… (1977) | popPK | 8 | [10.1007/BF02886650](https://doi.org/10.1007/BF02886650) | [615333](https://pubmed.ncbi.nlm.nih.gov/615333) | The study reports pharmacokinetic parameters (half-times, disappearance rates) for metildigoxin in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the text, only peak concentrations and qualitative comparisons. |
| `Haasis_1975.pdf` | Haasis R et al., [Cardiac effects and glycoside concentr…, Klinische Wochenschrift (1975) | popPK | 8 | [10.1007/BF01468758](https://doi.org/10.1007/BF01468758) | [1152344](https://pubmed.ncbi.nlm.nih.gov/1152344) | The study reports quantitative pharmacokinetic parameters (renal clearance and half-life) for beta-methyl-digoxin in humans. |
| `Kaufmann_1981.pdf` | Kaufmann B et al., Pharmacokinetics of metildigoxin and di…, Clinical pharmacokinetics (1981) | popPK | 8 | [10.2165/00003088-198106060-00004](https://doi.org/10.2165/00003088-198106060-00004) | [7318305](https://pubmed.ncbi.nlm.nih.gov/7318305) | The study investigates the pharmacokinetics of metildigoxin in humans and mentions parameters like volume of distribution and clearance, but the specific numeric values are not present in the provided abstract text. |
| `Marinow_1977.pdf` | Marinow J et al., Serum glycoside concentrations after si…, European journal of clinica… (1977) | popPK | 8 | [10.1007/BF00606413](https://doi.org/10.1007/BF00606413) | [856604](https://pubmed.ncbi.nlm.nih.gov/856604) | The study reports quantitative renal clearance values for beta-methyl-digoxin (metildigoxin) in humans, though volume of distribution and other compartmental parameters are not explicitly provided. |
| `Rameis_1984.pdf` | Rameis H et al., Changes in metildigoxin pharmacokinetic…, International journal of cl… (1984) | popPK | 8 | not captured | [6715083](https://pubmed.ncbi.nlm.nih.gov/6715083) | The study reports qualitative changes in metildigoxin clearance and volume of distribution in humans, but specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-06T03:11:19.758993+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angelino_1977 | relevant | 8 | 2 | The study reports quantitative clearance rates for metildigoxin in humans, but specific numeric values are not present in the provided abstract text. |
| popPK | Angelino_1979 | irrelevant | 2 | 0 | The abstract describes qualitative correlations and trends in renal clearance but does not report specific quantitative PK parameter values (e.g., CL, V, t1/2) for metildigoxin. |
| popPK | Dotti_1977 | relevant | 8 | 3 | The study reports pharmacokinetic parameters (half-times, disappearance rates) for metildigoxin in humans, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the text, only peak concentrations and qualitative comparisons. |
| popPK | Kaufmann_1981 | relevant | 8 | 2 | The study investigates the pharmacokinetics of metildigoxin in humans and mentions parameters like volume of distribution and clearance, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kelman_1980 | relevant | 10 | 4 | The study reports quantitative PK parameters (clearance, half-life) for fl-methyl digoxin in humans, but the specific numeric values for fl-methyl digoxin are contained in Table 4, which is not fully provided in the evidence (only Table 1 for ouabain is fully visible). |
| popPK | Modrić_1981 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| popPK | Rameis_1984 | relevant | 8 | 2 | The study reports qualitative changes in metildigoxin clearance and volume of distribution in humans, but specific numeric parameter values are not present in the provided evidence. |
| PD | Rameis_1984 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes (clearance, volume, serum concentrations) in cirrhosis but does not provide any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Risler_1983 | irrelevant | 2 | 0 | The study focuses on digoxin and its derivatives (including beta-methyl-digoxin) but does not report quantitative population PK parameters (CL, V, etc.) for metildigoxin, nor does it provide extractable numeric values for the subject drug. |
| popPK | Yukawa_1995 | relevant | 9 | 2 | The study reports a population PK model for metildigoxin clearance in humans, but specific numeric parameter estimates (e.g., typical clearance values) are not explicitly listed in the provided text, only variability coefficients. |
| popPK | Zilly_1975 | irrelevant | 2 | 0 | The study compares digoxin and beta-methyldigoxin (a different drug) and provides no quantitative PK parameters for metildigoxin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 03:11 UTC</sub>
