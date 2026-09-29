<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07F&quot;,&quot;href&quot;:&quot;atc/C07F.md&quot;},{&quot;label&quot;:&quot;nifedipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nifedipine_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Li2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nifedipine_Chung1987_reference&quot;,&quot;label&quot;:&quot;Chung_1987_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nifedipine/Nifedipine_Chung1987_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nifedipine

- **generic name:** nifedipine
- **ATC codes:** `C07FB03`, `C08CA05`, `C08GA01`
- **DrugBank:** [DB01115](https://go.drugbank.com/drugs/DB01115) · **PubChem:** [CID 4485](https://pubchem.ncbi.nlm.nih.gov/compound/4485)
- **molar mass:** 346.3346 g/mol (C17H18N2O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Nifedipine, or BAY a 1040, is a first generation dihydropyridine L-type calcium channel blocker, similar to [nicardipine].[A190210,A190273,A175390,L11383] Nifedipine was developed by Bayer and first described in the literature, along with other dihydropyridines, in 1972.[A175390,A190276] Since nifedipine's development, second and third generation dihydropyridines have been developed with slower onsets and longer durations of action.[A190273] The most popular of the third generation dihydropyridines is [amlodipine].[A190273]

Nifedipine was granted FDA approval on 31 December 1981.[L11383]

**Indication.** Nifedipine capsules are indicated to treat vasospastic angina and chronic stable angina.[L11383] Extended release tablets are indicated to treat vasospastic angina, chronic stable angina, and hypertension.[L11389,L1245]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nifedipine | parent | 346.335 | C17H18N2O6 | DrugBank | [4485](https://pubchem.ncbi.nlm.nih.gov/compound/4485) | Chung_1987, Li_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 06:44 | 4:36 | 1/1/0 | 0/0/0 | 0/0/0 | 50,757/11,844 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.875). The first reading is what the record holds.">cross-check: disputed</span> | [Li_2025_reference](drugs/drug_nifedipine/Nifedipine_Li2025_reference.md) | 1-compartment, oral | 3 | Li Y et al., Population Pharmacokinetics of Nifedipi…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70087](https://doi.org/10.1002/jcph.70087) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Chung_1987_reference](drugs/drug_nifedipine/Nifedipine_Chung1987_reference.md) | 1-compartment (no model) | 0 | Chung M et al., Clinical pharmacokinetics of nifedipine…, The American journal of med… (1987) | [10.1016/0002-9343(87)90630-9](https://doi.org/10.1016/0002-9343(87)90630-9) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nifedipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inducer/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2A6` substrate, `CYP2B6` inducer, `CYP2C8` inhibitor, `CYP2C9` inducer/inhibitor, `CYP2D6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…ater soluble metabolites, and the rest is eliminated in the feces as metabolites.[L11389]…”</sub> | prose |
| excretion | kidney | `ABCC2` inducer | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |
| excretion | small intestine | `ABCC2` inducer, `ABCC3` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (inhibitor), CACNA1S (inhibitor), CACNB2 (inhibitor), CALM1 (inhibitor), KCND3 (inhibitor), NR1I2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 448 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2025.pdf` | Li Y et al., Population Pharmacokinetics of Nifedipi…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70087](https://doi.org/10.1002/jcph.70087) | [40857211](https://pubmed.ncbi.nlm.nih.gov/40857211) | The paper reports a population PK model for nifedipine with explicit numeric values for clearance (18.74 L/h) and volume of distribution (103.88 L) present in the text. |
| `Chung_1987.pdf` | Chung M et al., Clinical pharmacokinetics of nifedipine…, The American journal of med… (1987) | popPK | 9 | [10.1016/0002-9343(87)90630-9](https://doi.org/10.1016/0002-9343(87)90630-9) | [3503594](https://pubmed.ncbi.nlm.nih.gov/3503594) | The text explicitly reports quantitative pharmacokinetic parameters for nifedipine, including clearance (450-700 ml/min), volumes of distribution (0.62-0.77 L/kg and 0.25-0.29 L/kg), and half-life (~2 hours). |
| `Chien_2004.pdf` | Chien SC et al., Pharmacokinetics of nifedipine in Taiwa…, Biopharmaceutics & drug dis… (2004) | popPK | 8 | [10.1002/bdd.386](https://doi.org/10.1002/bdd.386) | [14872555](https://pubmed.ncbi.nlm.nih.gov/14872555) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, T1/2, Tmax) for nifedipine in humans, with all numeric values explicitly present in the text. |

<sub>queue written 2026-09-29T06:40:20.083205+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fattinger_1991 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for quinidine, with nifedipine serving only as a co-administered drug whose lack of effect on quinidine kinetics was tested. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 06:40 UTC</sub>
