<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;pimozide&quot;}]"></div>

# pimozide

- **generic name:** pimozide
- **ATC codes:** `N05AG02`
- **DrugBank:** [DB01100](https://go.drugbank.com/drugs/DB01100) · **PubChem:** [CID 16362](https://pubchem.ncbi.nlm.nih.gov/compound/16362)
- **molar mass:** 461.5462 g/mol (C28H29F2N3O) — DrugBank
- **groups:** approved

## About

Pimozide is an antipsychotic used for conditions such as Tourette syndrome, tic disorders, schizophreniform disorder and Huntington's disease. It is an approved medicine, but is not authorised in the European Union and is used only in a limited way, mainly for severe tic disorders.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q144085](https://www.wikidata.org/wiki/Q144085) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:45 | 0:42 | 0/0/0 | 2/3/0 | 0/0/0 | 82,724/2,535 | ollama / glm-5.3-flash | 15 | 0/2 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Seo_2023_Kv_current](drugs/drug_pimozide/pd_Seo_2023_Kv_current.md) | Kv current inhibition ← pimozide · direct sigmoid Emax (Hill) effect | — | Seo MS et al., The inhibitory effects of pimozide, an…, Drug and chemical toxicology (2023) | [10.1080/01480545.2021.2021932](https://doi.org/10.1080/01480545.2021.2021932) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Vatansever_2021_Mpro_activity](drugs/drug_pimozide/pd_Vatansever_2021_Mpro_activity.md) | Mpro activity (inhibition of SARS-CoV-2 main protease) ← pimozide · direct sigmoid Emax (Hill) effect | — | Vatansever EC et al., Bepridil is potent against SARS-CoV-2 i…, Proceedings of the National… (2021) | [10.1073/pnas.2012201118](https://doi.org/10.1073/pnas.2012201118) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Newman-Tancredi_1998_35S_GTPgammaS_binding](drugs/drug_pimozide/pd_Newman_Tancredi_1998_35S_GTPgammaS_binding.md) | 5-HT-stimulated [35S]GTPgammaS binding (inhibition by pimozide) ← pimozide · inhibition effect | — | Newman-Tancredi A et al., Agonist and antagonist actions of antip…, European journal of pharmac… (1998) | [10.1016/s0014-2999(98)00483-x](https://doi.org/10.1016/s0014-2999(98)00483-x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_N_type_Ca2_current](drugs/drug_pimozide/pd_Sah_1994_N_type_Ca2_current.md) | N-type Ca2+ channel current (sympathetic neurons) ← pimozide · direct Emax (saturable) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sah_1994_P_type_Ca2_current](drugs/drug_pimozide/pd_Sah_1994_P_type_Ca2_current.md) | P-type Ca2+ channel current (cerebellar Purkinje neurons) ← pimozide · direct Emax (saturable) effect | — | Sah DW et al., Inhibition of P-type and N-type calcium…, Molecular pharmacology (1994) | — |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Xia_2004_Ca2_influx](drugs/drug_pimozide/pd_Xia_2004_Ca2_influx.md) | Ca2+ influx ← pimozide · inhibition effect | — | Xia M et al., Functional expression of L- and T-type…, Journal of molecular and ce… (2004) | [10.1016/j.yjmcc.2003.10.007](https://doi.org/10.1016/j.yjmcc.2003.10.007) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pimozide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2D6` inhibitor, `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (inhibitor), DRD2 (target), DRD3 (target), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Al_2026.pdf` | Al Nebaihi HM et al., Pharmacokinetics of Inhibitors of Succi…, The AAPS journal (2026) | popPK | 8 | [10.1208/s12248-026-01208-z](https://doi.org/10.1208/s12248-026-01208-z) | [41578070](https://pubmed.ncbi.nlm.nih.gov/41578070) | PK study of pimozide in rats with compartmental modeling, but numeric CL/Vd values are not present in the evidence text. |

<sub>queue written 2026-10-06T16:44:39.181706+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Al_2026 | relevant | 8 | 3 | PK study of pimozide in rats with compartmental modeling, but numeric CL/Vd values are not present in the evidence text. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | Pimozide is only a repurposing-screening comparator; the paper studies methotrexate against SARS-CoV-2 with no PK parameters for pimozide. |
| popPK | Cvetkovic_2003_2 | irrelevant | 0 | 0 | This is a review of lopinavir/ritonavir; pimozide is only mentioned as a contraindicated co-administered drug, with no PK parameters for pimozide. |
| popPK | Dresser_2000_2 | irrelevant | 1 | 0 | Review of CYP3A4 interactions mentioning pimozide only as a QT-risk drug, with no PK parameters or numeric values. |
| popPK | Newman-Tancredi_1998 | irrelevant | 0 | 0 | In-vitro receptor binding study with no pharmacokinetic parameters for pimozide. |
| popPK | Papadopoulos_1990 | irrelevant | 0 | 0 | Pimozide is only used as a calmodulin inhibitor in an in vitro biochemical study; no PK parameters are reported. |
| popPK | Sah_1994 | irrelevant | 0 | 0 | In-vitro electrophysiology study of calcium channel blockade; no pharmacokinetic disposition parameters for pimozide. |
| popPK | Seo_2023 | irrelevant | 0 | 0 | In-vitro electrophysiology study of Kv channel inhibition in rabbit coronary smooth muscle cells; no PK disposition parameters for pimozide. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | In vitro SARS-CoV-2 Mpro inhibition study; pimozide is only a screened inhibitor with an IC50, no PK disposition parameters. |
| popPK | Xia_2004 | irrelevant | 0 | 0 | Pimozide is only used as a T-type Ca2+ channel blocker probe in an in vitro pharmacology study; no PK disposition parameters are reported. |
| popPK | Xiong_2019 | irrelevant | 0 | 0 | Pimozide is only used as an agonist in an in-vitro receptor pharmacology study; no PK parameters for pimozide are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
