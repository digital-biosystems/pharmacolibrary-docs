<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;moxonidine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moxonidine_Hempel1998_reference&quot;,&quot;label&quot;:&quot;Hempel_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# moxonidine

- **generic name:** moxonidine
- **ATC codes:** `C02AC05`, `C02LC05`
- **DrugBank:** [DB09242](https://go.drugbank.com/drugs/DB09242) · **PubChem:** [CID 4810](https://pubchem.ncbi.nlm.nih.gov/compound/4810)
- **molar mass:** 241.677 g/mol (C9H12ClN5O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

**Description.** Moxonidine is a new-generation centrally acting antihypertensive drug approved for the treatment of mild to moderate essential hypertension. It is suggested to be effective in cases where other agents such as thiazides, beta-blockers, ACE inhibitors, and calcium channel blockers are not appropriate or irresponsive. As well, moxonidine has been shown to present blood pressure-independent beneficial effects on insulin resistance syndrome.

**Indication.** For the treatment of mild to moderate essential or primary hypertension [L1025]. Effective as most first-line antihypertensives when used as monotherapy [A27137].

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| moxonidine | parent | 241.677 | C9H12ClN5O | DrugBank | [4810](https://pubchem.ncbi.nlm.nih.gov/compound/4810) | Hempel_1998 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 20:05 | 6:09 | 1/0/0 | 0/0/0 | 0/0/0 | 28,122/5,631 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). The first reading is what the record holds.">cross-check: disputed</span> | [Hempel_1998_reference](drugs/drug_moxonidine/Moxonidine_Hempel1998_reference.md) | 1-compartment, IV | 2 | Hempel G et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | [10.1016/S0009-9236(98)90053-4](https://doi.org/10.1016/S0009-9236(98)90053-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moxonidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…s absorbed with negligible interference from food intake or first pass metabolism, resulti…”</sub> | prose |
| metabolism | kidney | <sub>“…high level of dehydrogenated moxonidine metabolite in human urine samples suggests that de…”</sub> | prose |
| excretion | bile duct | <sub>“…istration, with only approximately 1% being eliminiated via faeces. [FDA label]…”</sub> | prose |
| excretion | kidney | <sub>“…Elimination is nearly entirely via the kidneys with a majority (50 -75%) of overall moxoni…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (inhibitor), ADRA2C (inhibitor), NISCH (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 21 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hempel_1998.pdf` | Hempel G et al., Population pharmacokinetic-pharmacodyna…, Clinical pharmacology and t… (1998) | popPK | 10 | [10.1016/S0009-9236(98)90053-4](https://doi.org/10.1016/S0009-9236(98)90053-4) | [9871427](https://pubmed.ncbi.nlm.nih.gov/9871427) | The paper reports quantitative population PK parameters for moxonidine, including clearance (35 L/h), volume of distribution (132 L), and effect compartment rate constant (kco = 0.198 h-1), directly in the text. |
| `Karlsson_1998.pdf` | Karlsson MO et al., Assumption testing in population pharma…, Journal of pharmacokinetics… (1998) | popPK | 10 | [10.1023/a:1020561807903](https://doi.org/10.1023/a:1020561807903) | [9795882](https://pubmed.ncbi.nlm.nih.gov/9795882) | The paper is a population pharmacokinetic study of moxonidine, but the provided evidence contains only the abstract and no numeric parameter values. |
| `Trenk_1987.pdf` | Trenk D et al., Pharmacokinetics of moxonidine after si…, Journal of clinical pharmac… (1987) | popPK | 10 | [10.1002/j.1552-4604.1987.tb05602.x](https://doi.org/10.1002/j.1552-4604.1987.tb05602.x) | [3437071](https://pubmed.ncbi.nlm.nih.gov/3437071) | The paper reports quantitative pharmacokinetic parameters (CL/F, t1/2, Cmax, Tmax) for moxonidine in healthy volunteers. |
| `Savic_2007.pdf` | Savic RM et al., Implementation of a transit compartment…, Journal of pharmacokinetics… (2007) | popPK | 8 | [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0) | [17653836](https://pubmed.ncbi.nlm.nih.gov/17653836) | The paper is a population PK study including moxonidine, but the specific numeric parameter values are not present in the provided evidence. |
| `Trocóniz_2000.pdf` | Trocóniz IF et al., Comparison of manual versus ambulatory…, Clinical pharmacology and t… (2000) | popPK | 8 | [10.1067/mcp.2000.106907](https://doi.org/10.1067/mcp.2000.106907) | [10945312](https://pubmed.ncbi.nlm.nih.gov/10945312) | The study reports a one-compartment PK model for moxonidine but the evidence text only provides pharmacodynamic parameters (ke0, Emax, C50) and lacks specific numeric values for PK parameters like clearance or volume. |
| `Brynne_2001.pdf` | Brynne L et al., Pharmacodynamic models for the cardiova…, British journal of clinical… (2001) | pd | 5 | [10.1046/j.1365-2125.2001.01320.x](https://doi.org/10.1046/j.1365-2125.2001.01320.x) | [11167663](https://www.ncbi.nlm.nih.gov/pubmed/11167663) | metadata signals extractable PD data (Pharmacodynamicmodel) |
| `Schäfer_2002.pdf` | Schäfer U et al., Presynaptic effects of moxonidine in is…, The Journal of pharmacology… (2002) | pd | 5 | [10.1124/jpet.102.041657](https://doi.org/10.1124/jpet.102.041657) | [12438540](https://www.ncbi.nlm.nih.gov/pubmed/12438540) | metadata signals extractable PD data (EC50) |
| `George_2004.pdf` | George OK et al., Moxonidine, an antihypertensive agent,…, Journal of cardiovascular p… (2004) | pd | 4 | [10.1097/00005344-200402000-00022](https://doi.org/10.1097/00005344-200402000-00022) | [14716222](https://www.ncbi.nlm.nih.gov/pubmed/14716222) | metadata signals extractable PD data (EC50) |
| `Kurko_2014.pdf` | Kurko D et al., Analysis of functional selectivity thro…, Brain research bulletin (2014) | pd | 4 | [10.1016/j.brainresbull.2014.07.005](https://doi.org/10.1016/j.brainresbull.2014.07.005) | [25080296](https://www.ncbi.nlm.nih.gov/pubmed/25080296) | metadata signals extractable PD data (Emax) |
| `Girardin_2005.pdf` | Girardin F et al., [Antihypertensive therapy and drug-drug…, Revue medicale suisse (2005) | pgx | 7 | not captured | [16238231](https://www.ncbi.nlm.nih.gov/pubmed/16238231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-27T20:02:43.034738+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bohmann_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and noradrenaline release, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Brynne_2001 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| popPK | Doggrell_2001 | irrelevant | 2 | 0 | The paper is a review discussing the mechanism of action and clinical safety of moxonidine, mentioning a one-compartment model qualitatively but providing no quantitative pharmacokinetic parameter values. |
| popPK | George_2004 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | George_2004 | not_relevant | 0 | 0 | The paper describes a qualitative mechanistic observation regarding receptor permissiveness in rat-tail arteries and does not report numeric concentration-effect or dose-response parameters for moxonidine. |
| PGx | Girardin_2005 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions and mentions moxonidine has few PK interactions, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hayar_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of receptor mechanisms in brain slices, reporting no pharmacokinetic parameters. |
| popPK | Karlsson_1998 | relevant | 10 | 0 | The paper is a population pharmacokinetic study of moxonidine, but the provided evidence contains only the abstract and no numeric parameter values. |
| popPK | Kurko_2014 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| PD | Kurko_2014 | not_relevant | 0 | 0 | The paper focuses on the functional selectivity and signaling pathways of the alpha-2C adrenergic receptor, not on the pharmacokinetic or pharmacodynamic modeling of moxonidine. |
| popPK | Radwanska_2009 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor effects on isolated rat heart atria and does not report any pharmacokinetic parameters for moxonidine. |
| popPK | Savic_2007 | relevant | 8 | 0 | The paper is a population PK study including moxonidine, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Schäfer_2002 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Sun_2007 | irrelevant | 0 | 0 | The study is a mechanistic investigation of insulin resistance in rat adipocytes and does not report pharmacokinetic parameters for moxonidine. |
| popPK | Trocóniz_2000 | relevant | 8 | 2 | The study reports a one-compartment PK model for moxonidine but the evidence text only provides pharmacodynamic parameters (ke0, Emax, C50) and lacks specific numeric values for PK parameters like clearance or volume. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 20:02 UTC</sub>
