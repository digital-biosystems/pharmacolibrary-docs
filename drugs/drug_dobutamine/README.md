<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;dobutamine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dobutamine_Hallik2020_reference&quot;,&quot;label&quot;:&quot;Hallik_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Dobutamine_ma2015_reference&quot;,&quot;label&quot;:&quot;\u0160\u00edma_2015_reference&quot;,&quot;href&quot;:&quot;drugs/drug_dobutamine/Dobutamine_ma2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dobutamine

- **generic name:** dobutamine
- **ATC codes:** `C01CA07`
- **DrugBank:** [DB00841](https://go.drugbank.com/drugs/DB00841)
- **groups:** approved, investigational

## About

**Description.** A beta-1 agonist catecholamine that has cardiac stimulant action without evoking vasoconstriction or tachycardia. It is proposed as a cardiotonic after myocardial infarction or open heart surgery.

**Indication.** Indicated when parenteral therapy is necessary for inotropic support in the short-term treatment of patients with cardiac decompensation due to depressed contractility resulting either from organic heart disease or from cardiac surgical procedures.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 17:54 | 0:39 | 2/0/0 | 0/0/0 | 0/0/0 | 15,751/964 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span> | [Hallik_2020_reference](drugs/drug_dobutamine/Dobutamine_Hallik2020_reference.md) | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Šíma_2015_reference](drugs/drug_dobutamine/Dobutamine_ma2015_reference.md) | Šíma M et al., Effect of co-medication on the pharmaco…, Physiological research (2015) | [10.33549/physiolres.933213](https://doi.org/10.33549/physiolres.933213) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dobutamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `COMT` substrate | DrugBank actor |
| metabolism | kidney | `COMT` substrate | DrugBank actor |
| metabolism | liver | `COMT` substrate | DrugBank actor |
| excretion | kidney | <sub>“…In human urine, the major excretion products are the conjugates of dobutam…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRB1 (target), ADRB2 (target), ESR1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 107 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 2  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hallik_2020.pdf` | Hallik M et al., Population pharmacokinetics and pharmac…, British journal of clinical… (2020) | popPK | 10 | [10.1111/bcp.14146](https://doi.org/10.1111/bcp.14146) | [31657867](https://pubmed.ncbi.nlm.nih.gov/31657867) | The paper reports quantitative population PK parameters (CL and V) for dobutamine in neonates with specific numeric values provided in the text. |
| `Schwartz_1991.pdf` | Schwartz PH et al., The pharmacokinetics of dobutamine in p…, Drug metabolism and disposi… (1991) | popPK | 10 | not captured | [1680627](https://pubmed.ncbi.nlm.nih.gov/1680627) | The paper reports quantitative pharmacokinetic parameters (clearance, half-lives) for dobutamine in pediatric patients with specific numeric values provided in the text. |

<sub>queue written 2026-09-20T17:54:25.119321+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kasai_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glucose (IDVG) in pigs, using dobutamine only as a tool to modulate cardiac output, not as the subject drug for PK parameter estimation. |
| popPK | Kuipers_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of alfentanil, with dobutamine used only as a pharmacologic agent to alter cardiac output. |
| popPK | Marcus_2026 | irrelevant | 0 | 0 | The study investigates microcirculatory and mitochondrial effects of dobutamine in septic rats, not pharmacokinetic disposition parameters. |
| popPK | Piani_2026 | irrelevant | 0 | 0 | The study focuses on hemodynamic correlations in preeclampsia and mentions dobutamine only as a covariate for inotropic support, without reporting any pharmacokinetic parameters. |
| popPK | Romson_1999 | irrelevant | 0 | 0 | The study reports hemodynamic and pharmacodynamic responses (heart rate, blood pressure, LV performance) to dobutamine, but does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sun_1997 | irrelevant | 0 | 0 | The study focuses on myocardial oxygen consumption using [1-11C]acetate, with dobutamine used only as a pharmacological agent to alter hemodynamics, not as the subject of PK analysis. |
| popPK | Šíma_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of phenobarbital, with dobutamine serving only as a co-administered drug to assess potential interactions, not as the subject drug. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-20 17:54 UTC</sub>
