<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;brimonidine&quot;}]"></div>

# brimonidine

- **generic name:** brimonidine
- **ATC codes:** `D11AX21`, `S01EA05`, `S01EA55`, `S01GA07`
- **DrugBank:** [DB00484](https://go.drugbank.com/drugs/DB00484) · **PubChem:** [CID 2435](https://pubchem.ncbi.nlm.nih.gov/compound/2435)
- **molar mass:** 292.135 g/mol (C11H10BrN5) — DrugBank
- **groups:** approved, investigational

## About

Brimonidine is an alpha-adrenergic agonist used to treat glaucoma and ocular hypertension, and topically for the skin condition rosacea. It is an approved medicine, with an authorised product in the European Union for skin use, and is widely used in eye care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q577377](https://www.wikidata.org/wiki/Q577377) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:48 | 0:48 | 0/0/0 | 0/1/0 | 0/0/0 | 68,703/1,714 | einfracz / qwen3.8-27b | 4 | 1/3 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Menozzi_2018_EFS_evoked_contractions](drugs/drug_brimonidine/pd_Menozzi_2018_EFS_evoked_contractions.md) | EFS-evoked contractions ← brimonidine · direct Emax (saturable) effect | — | Menozzi A et al., Effects of selective α, Journal of veterinary pharm… (2018) | [10.1111/jvp.12470](https://doi.org/10.1111/jvp.12470) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=brimonidine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `AOX1` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA2A (target), ADRA2B (target), ADRA2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Tamhane_2021.pdf` | Tamhane M et al., Ocular Pharmacokinetics of Brimonidine…, The Journal of pharmacology… (2021) | popPK | 10 | [10.1124/jpet.120.000483](https://doi.org/10.1124/jpet.120.000483) | [34210753](https://pubmed.ncbi.nlm.nih.gov/34210753) | The paper reports a compartmental PK model for brimonidine in monkeys and humans, but the specific numeric parameter values (clearance, volume, rate constants) are not provided in the extracted text, likely residing in figures or tables not included. |
| `Durairaj_2014.pdf` | Durairaj C et al., Mechanism - based translational pharmac…, Pharmaceutical research (2014) | popPK | 8 | [10.1007/s11095-014-1311-9](https://doi.org/10.1007/s11095-014-1311-9) | [24549827](https://pubmed.ncbi.nlm.nih.gov/24549827) | The paper describes a mechanistic PKPD model for brimonidine in rabbits, but the abstract contains no numeric parameter values (CL, V, ka, etc.). |

<sub>queue written 2026-10-07T07:48:07.916216+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belalcazar_2026 | irrelevant | 0 | 0 | This is a clinical efficacy trial assessing intraocular pressure reduction and tolerability, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Del_2022 | relevant | 5 | 3 | Study reports quantitative NCA parameters (AUC, t1/2, CL, V) for brimonidine in rabbits, but lacks volume of distribution and intercompartmental clearance values necessary for a full compartmental model. |
| popPK | Durairaj_2014 | relevant | 8 | 0 | The paper describes a mechanistic PKPD model for brimonidine in rabbits, but the abstract contains no numeric parameter values (CL, V, ka, etc.). |
| popPK | Inatani_2023 | irrelevant | 0 | 0 | The study is a clinical efficacy trial measuring intraocular pressure reduction, not a pharmacokinetic study reporting disposition parameters (CL, V, ka, etc.) for brimonidine. |
| popPK | Kurko_2014 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic pharmacology study analyzing receptor signaling pathways, not a pharmacokinetic study. |
| popPK | Liu_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of brimonidine's effect on nitrite production in porcine tissue and does not report any pharmacokinetic parameters. |
| popPK | Martínez-Águila_2013 | irrelevant | 0 | 0 | The study investigates agomelatine, and brimonidine is used only as a comparator agent without any pharmacokinetic parameters reported for it. |
| popPK | Menozzi_2018 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamics study measuring receptor potency (pD2) in horse bronchi, not a pharmacokinetic study reporting disposition parameters like clearance or volume for brimonidine. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor binding and signaling, not a pharmacokinetic study, and reports no disposition parameters for brimonidine. |
| popPK | Pham_2023 | irrelevant | 0 | 0 | The study is a comparative clinical trial of IOP-lowering efficacy (netarsudil vs. brimonidine), not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Piwnica_2014 | irrelevant | 0 | 0 | The study investigates pharmacodynamic properties (vasoconstriction and anti-inflammatory effects) and receptor selectivity, not pharmacokinetic parameters. |
| popPK | Schäfer_2002 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of receptor interactions in rat hearts, not a pharmacokinetic study of brimonidine. |
| popPK | Sharif_2024 | irrelevant | 0 | 0 | The study focuses on omidenepag isopropyl, with brimonidine mentioned only as a co-administered comparator agent, and no pharmacokinetic parameters for brimonidine are reported. |
| popPK | Tamhane_2021 | relevant | 10 | 2 | The paper reports a compartmental PK model for brimonidine in monkeys and humans, but the specific numeric parameter values (clearance, volume, rate constants) are not provided in the extracted text, likely residing in figures or tables not included. |
| popPK | Wikberg-Matsson_2001 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study of receptor-mediated vasoconstriction, not a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
