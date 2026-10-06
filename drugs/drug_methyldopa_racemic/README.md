<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;methyldopa (racemic)&quot;}]"></div>

# methyldopa (racemic)

- **generic name:** methyldopa (racemic)
- **ATC codes:** `C02AB02`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Methyldopa is a centrally acting antihypertensive used to lower high blood pressure. It is an older medicine that is now used only rarely, mainly when other blood pressure drugs are unsuitable, such as in pregnancy.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 12:36 | 2:07 | 0/0/0 | 0/0/0 | 0/0/0 | 61,527/3,732 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 1/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 139 matched, 61 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kochak_1985.pdf` | Kochak GM et al., The pharmacokinetics of alpha-methyldop…, Journal of pharmacokinetics… (1985) | popPK | 10 | [10.1007/BF01061477](https://doi.org/10.1007/BF01061477) | [3841366](https://pubmed.ncbi.nlm.nih.gov/3841366) | The study reports quantitative pharmacokinetic parameters (clearance, half-life) for alpha-methyldopa in dogs. |
| `Skerjanec_1995.pdf` | Skerjanec A et al., Pharmacokinetics and presystemic gut me…, Journal of clinical pharmac… (1995) | popPK | 10 | [10.1002/j.1552-4604.1995.tb04058.x](https://doi.org/10.1002/j.1552-4604.1995.tb04058.x) | [7608316](https://pubmed.ncbi.nlm.nih.gov/7608316) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution, bioavailability) for methyldopa in humans, with all numeric values explicitly provided in the text. |
| `Campbell_1992.pdf` | Campbell NR et al., Increases in methyldopa absorption and…, Journal of clinical pharmac… (1992) | popPK | 9 | [10.1002/j.1552-4604.1992.tb03861.x](https://doi.org/10.1002/j.1552-4604.1992.tb03861.x) | [1587963](https://pubmed.ncbi.nlm.nih.gov/1587963) | The study reports quantitative pharmacokinetic parameters for methyldopa, including renal clearance (mL/min) and plasma half-life (hr), in the abstract. |
| `Campbell_1995.pdf` | Campbell NR et al., Methyldopa kinetics before and after in…, European journal of clinica… (1995) | popPK | 8 | [10.1007/BF00194957](https://doi.org/10.1007/BF00194957) | [8641329](https://pubmed.ncbi.nlm.nih.gov/8641329) | The study reports pharmacokinetic parameters (absorption, renal clearance) for methyldopa, but the evidence only provides percentages and correlations rather than absolute quantitative values (e.g., L/h, L) for clearance or volume. |

<sub>queue written 2026-10-06T12:36:05.448440+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abi_1993 | irrelevant | 2 | 0 | The paper describes a new algorithm for PK modeling and uses methyldopa in dogs only as a secondary example with data extracted from literature, without reporting original quantitative parameter values in the provided evidence. |
| popPK | Adamiak-Giera_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Adamiak_2010 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa, not methyldopa_racemic. |
| popPK | Ahtila_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and entacapone, not methyldopa. |
| popPK | Blandini_1997 | irrelevant | 0 | 0 | The study focuses on L-dopa and its metabolite 3-O-methyldopa, not methyldopa_racemic, and is a methodological paper without PK parameter values. |
| popPK | Bugamelli_2011 | irrelevant | 0 | 0 | The study focuses on L-dopa and its metabolite 3-O-methyldopa, not methyldopa_racemic, and is an analytical method development paper without PK parameter reporting. |
| popPK | Campbell_1995 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (absorption, renal clearance) for methyldopa, but the evidence only provides percentages and correlations rather than absolute quantitative values (e.g., L/h, L) for clearance or volume. |
| popPK | Cedarbaum_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa in monkeys, not methyldopa_racemic. |
| popPK | Ciavarella_1994 | irrelevant | 0 | 0 | The paper is a clinical review of diabetic nephropathy in pregnancy that mentions methyldopa as a therapeutic option but provides no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Crevoisier_2003 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Del_1995 | irrelevant | 0 | 0 | The study focuses on L-dopa and 3-O-methyldopa pharmacokinetics in Parkinson's disease, not methyldopa. |
| popPK | Deleu_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa. |
| popPK | Deleu_1993_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolites in dogs, not methyldopa. |
| popPK | Deleu_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa, not methyldopa_racemic. |
| popPK | Dingemanse_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tolcapone and levodopa, not methyldopa_racemic. |
| popPK | Dingemanse_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolites in the presence of benserazide, not methyldopa. |
| popPK | Dingemanse_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa. |
| popPK | Elbarbry_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa, with methyldopa used only as an internal standard for the HPLC method. |
| popPK | George_1980 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| popPK | Goa_1989 | irrelevant | 0 | 0 | The paper is a review of labetalol, and methyldopa is only mentioned as a comparator drug without any pharmacokinetic data provided. |
| popPK | Gonçalves_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of furosemide, with methyldopa only mentioned as a concomitant medication for hypertension. |
| popPK | Heikkinen_2002 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa and entacapone, not methyldopa_racemic. |
| popPK | Jenner_2026 | irrelevant | 0 | 0 | The paper is a review of COMT inhibitors (entacapone) and levodopa for Parkinson's disease and does not contain any data for methyldopa. |
| popPK | Jorga_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tolcapone and levodopa, not methyldopa_racemic. |
| popPK | Jorga_1998 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and 3-O-methyldopa, not methyldopa. |
| popPK | Jorga_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of benserazide and levodopa, not methyldopa_racemic. |
| popPK | Jorga_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Juchems_1965 | irrelevant | 0 | 0 | no_text gate: only 116 chars of text extracted (&lt; 400) |
| popPK | Kaakkola_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolites (including 3-O-methyldopa) in the context of entacapone, not methyldopa. |
| popPK | Keller_2001 | irrelevant | 0 | 0 | The paper is a review discussing dosage guidelines and general pharmacokinetic changes in pregnancy/renal failure, but it does not report specific quantitative PK parameters (CL, V, etc.) for methyldopa. |
| popPK | Keränen_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and its metabolites, not methyldopa_racemic. |
| popPK | Larochelle_1990 | irrelevant | 0 | 0 | The paper is a review of hypertension in the elderly that mentions methyldopa only as a drug used in a clinical trial, without reporting any quantitative pharmacokinetic parameters for it. |
| popPK | LeWitt_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of opicapone and levodopa, not methyldopa_racemic. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The provided evidence does not identify the drug as methyldopa_racemic, and the context (Russian/Brazilian populations, specific dosing regimens) suggests a different study or drug, making it impossible to confirm relevance to the target drug. |
| popPK | Mahmud_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of erythrocyte membrane scrambling and does not report pharmacokinetic parameters. |
| popPK | Miyaue_2023 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Miyaue_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and 3-O-methyldopa in the context of entacapone administration, not methyldopa_racemic. |
| popPK | Morselli_1989 | irrelevant | 2 | 0 | The paper is a review of antihypertensive drugs in neonates and does not provide original quantitative pharmacokinetic parameter values for methyldopa in the evidence provided. |
| popPK | Myhre_1982 | irrelevant | 0 | 0 | no_text gate: only 87 chars of text extracted (&lt; 400) |
| popPK | Müller_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Müller_2024 | irrelevant | 0 | 0 | The paper is a review of levodopa pharmacokinetics and does not report quantitative PK parameters for methyldopa. |
| popPK | Nakano_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of MPC-1304, with methyldopa serving only as a co-administered drug for pharmacodynamic interaction assessment. |
| popPK | Nutt_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Nyholm_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa, not methyldopa_racemic. |
| popPK | Nyholm_2003 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Opezzo_2003 | irrelevant | 2 | 0 | The study reports qualitative microdialysis concentration trends in rat brain tissue rather than quantitative systemic pharmacokinetic parameters (CL, V, ka) for the drug. |
| popPK | Podjarny_1995 | irrelevant | 0 | 0 | The study is a pharmacodynamic/renal function study in rats where methyldopa is used as a therapeutic agent to treat hypertension, and no pharmacokinetic parameters (CL, V, etc.) for methyldopa are reported. |
| popPK | Rose_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa, not methyldopa_racemic. |
| popPK | Ruottinen_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levodopa and its metabolites (3-O-methyldopa, homovanillic acid) in the presence of entacapone, not methyldopa. |
| popPK | Schneider_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of deuterated L-DOPA (SD-1077) and L-DOPA, not methyldopa. |
| popPK | Schrader_1971 | irrelevant | 0 | 0 | no_text gate: only 56 chars of text extracted (&lt; 400) |
| popPK | Sitprija_1993 | irrelevant | 0 | 0 | The study evaluates the renal protective effects of enalapril in chronic renal failure, using methyldopa only as a control antihypertensive agent without reporting any pharmacokinetic parameters for it. |
| popPK | Stenbaek_1977 | irrelevant | 0 | 0 | no_text gate: only 45 chars of text extracted (&lt; 400) |
| popPK | Trocóniz_1998 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of levodopa and entacapone, not the pharmacokinetics of methyldopa_racemic. |
| popPK | Yamamoto_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of L-dopa and its metabolite 3-O-methyldopa, not methyldopa_racemic. |
| popPK | Yeh_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of levodopa and carbidopa (Sinemet CR), not methyldopa. |
| popPK | Young_1966 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | el-Yazigi_1996 | irrelevant | 0 | 0 | The study describes a liquid chromatographic method for propofol where methyldopa is used only as an internal standard, not as the subject drug for PK analysis. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
