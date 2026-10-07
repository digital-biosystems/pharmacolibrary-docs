<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;astemizole&quot;}]"></div>

# astemizole

- **generic name:** astemizole
- **ATC codes:** `R06AX11`
- **DrugBank:** [DB00637](https://go.drugbank.com/drugs/DB00637) · **PubChem:** [CID 2247](https://pubchem.ncbi.nlm.nih.gov/compound/2247)
- **molar mass:** 458.5703 g/mol (C28H31FN4O) — DrugBank
- **groups:** approved, withdrawn

## About

Astemizole is a non-sedating antihistamine that was used to treat allergic conditions such as urticaria and giant papillary conjunctivitis. It has been withdrawn from the market because it could cause serious heart rhythm problems, including QT prolongation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423437](https://www.wikidata.org/wiki/Q423437) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:36 | 1:45 | 0/0/0 | 1/0/0 | 0/0/0 | 70,531/1,592 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Back_2015_QTc](drugs/drug_astemizole/pd_Back_2015_QTc.md) | QTc interval ← astemizole · direct Emax (saturable) effect | — | Back HM et al., Development of QTc prolongation model i…, Xenobiotica; the fate of fo… (2015) | [10.3109/00498254.2014.991366](https://doi.org/10.3109/00498254.2014.991366) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=astemizole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | heart | `CYP2J2` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP2J2` substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target), KCNH1 (unknown), KCNH2 (inhibitor), MAPT (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Back_2015.pdf` | Back HM et al., Development of QTc prolongation model i…, Xenobiotica; the fate of fo… (2015) | popPK | 10 | [10.3109/00498254.2014.991366](https://doi.org/10.3109/00498254.2014.991366) | [25475996](https://pubmed.ncbi.nlm.nih.gov/25475996) | The paper reports specific quantitative PK parameters (ka, Vc, Vm, kel) for astemizole in the context of a PK/PD model. |

<sub>queue written 2026-10-07T22:35:27.365215+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of astemizole's effect on parasite microtubules and does not report pharmacokinetic parameters. |
| popPK | Cvetkovic_2003 | irrelevant | 0 | 0 | The paper is a review of lopinavir/ritonavir and only mentions astemizole as a contraindicated interacting drug, providing no pharmacokinetic parameters for astemizole. |
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article summarizing PK-PD relationships for multiple antihistamines, including astemizole, but it does not report original quantitative disposition parameters (CL, V, etc.) for astemizole in the provided text. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | The paper is a review of CYP3A4 drug interactions and does not report original quantitative pharmacokinetic parameters for astemizole. |
| popPK | Guo_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper where astemizole is used only as a pharmacological antagonist to block histamine receptors, not as the subject of pharmacokinetic analysis. |
| popPK | Hamid_2004 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay comparison and does not report pharmacokinetic parameters for astemizole. |
| popPK | Shin_2006 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of brompheniramine, not the pharmacokinetics of astemizole. |
| popPK | Sugiyama_1997 | irrelevant | 2 | 0 | The study is a mechanistic cardiotoxicity assessment in dogs that mentions a two-compartment pattern but does not report quantitative PK parameters (CL, V, ka, etc.) for astemizole. |
| popPK | Yu_2014 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding assay investigating allosteric modulation of the hERG channel, not a pharmacokinetic study of astemizole disposition. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
