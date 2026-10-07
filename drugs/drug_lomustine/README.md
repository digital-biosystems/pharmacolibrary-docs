<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;lomustine&quot;}]"></div>

# lomustine

- **generic name:** lomustine
- **ATC codes:** `L01AD02`
- **DrugBank:** [DB01206](https://go.drugbank.com/drugs/DB01206) · **PubChem:** [CID 3950](https://pubchem.ncbi.nlm.nih.gov/compound/3950)
- **molar mass:** 233.695 g/mol (C9H16ClN3O2) — DrugBank
- **groups:** approved, investigational

## About

Lomustine is an alkylating anticancer drug used to treat cancers such as brain cancer, Hodgkin lymphoma, melanoma, and kidney cancer. It is an approved medicine, but carries a boxed warning, so its use requires careful risk management.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415378](https://www.wikidata.org/wiki/Q415378) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| lomustine | parent | 233.695 | C9H16ClN3O2 | DrugBank | [3950](https://pubchem.ncbi.nlm.nih.gov/compound/3950) | Zhuang_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:31 | 0:32 | 1/1/0 | 0/0/0 | 0/0/0 | 52,789/4,226 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Rodón_2015_reference](drugs/drug_lomustine/Lomustine_Rodn2015_reference.md) | — | — (no model) | 0 | Rodón J et al., Pharmacokinetic, pharmacodynamic and bi…, Investigational new drugs (2015) | [10.1007/s10637-014-0192-4](https://doi.org/10.1007/s10637-014-0192-4) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Zhuang_2011_reference](drugs/drug_lomustine/Lomustine_Zhuang2011_reference.md) | — | 1-compartment (no model) | 3 | Zhuang L et al., HPLC method validation for the quantifi…, European journal of drug me… (2011) | [10.1007/s13318-011-0030-4](https://doi.org/10.1007/s13318-011-0030-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lomustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor, `CYP3A4` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: DNA (cross-linking/alkylation), STMN4 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhuang_2011.pdf` | Zhuang L et al., HPLC method validation for the quantifi…, European journal of drug me… (2011) | popPK | 9 | [10.1007/s13318-011-0030-4](https://doi.org/10.1007/s13318-011-0030-4) | [21380568](https://pubmed.ncbi.nlm.nih.gov/21380568) | The study reports population pharmacokinetic parameters (t1/2, AUC, Cmax) for a one-compartment model in rats, but lacks explicit values for clearance (CL) and volume (V). |
| `Villikka_1999.pdf` | Villikka K et al., Cytochrome P450-inducing antiepileptics…, Clinical pharmacology and t… (1999) | pgx | 7 | [10.1053/cp.1999.v66.103403001](https://doi.org/10.1053/cp.1999.v66.103403001) | [10613614](https://www.ncbi.nlm.nih.gov/pubmed/10613614) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T17:30:41.549161+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Buckner_2003 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for irinotecan, not lomustine. |
| popPK | El-Yazigi_1988 | irrelevant | 0 | 0 | The pharmacokinetic parameters reported are for BCNU (Carmustine), not CCNU (Lomustine), in rabbits. |
| PGx | Le_1993 | not_relevant | 2 | 0 | The paper reports a drug-drug interaction potential (inhibition of CYP2D6 by lomustine) but does not report a pharmacokinetic or pharmacodynamic effect in patients stratified by genotype (e.g., CYP2D6 Poor Metabolizers vs. Extensive Metabolizers). |
| PGx | Prakash_2026 | not_relevant | 0 | 0 | The paper describes a computational framework for drug repurposing and does not report specific pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters of lomustine. |
| PGx | Radtke_2022 | not_relevant | 2 | 5 | The paper reports no effect of ABCB1 knockout on the response to lomustine, whereas the significant effects were observed for temozolomide and carmustine. |
| popPK | Rodón_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of galunisertib, with lomustine serving only as a comparator drug in a combination therapy arm without any reported PK parameters for lomustine itself. |
| PD | Rodón_2015 | not_relevant | 4 | 4 | The paper reports PD for galunisertib (pSMAD2 inhibition vs concentration), but does not provide numeric PD parameters or an extractable exposure-response relationship for lomustine. |
| PGx | Villikka_1999 | not_relevant | 0 | 0 | The paper studies the pharmacokinetic effect of CYP3A4-inducing drugs on vincristine, not the effect of a gene variant on lomustine. |
| popPK | Wick_2004 | irrelevant | 0 | 0 | The study is an in vitro mechanistic analysis of neurotoxicity (cell death/caspase activity) and does not report pharmacokinetic disposition parameters (CL, V, t1/2) for lomustine. |
| PGx | Zhou-Pan_1993 | not_relevant | 0 | 0 | The paper focuses on vinblastine metabolism; lomustine is only mentioned as a potential drug interaction inhibitor, not as the subject of pharmacogenomic analysis. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:30 UTC</sub>
