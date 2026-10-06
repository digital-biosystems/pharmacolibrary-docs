<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;romidepsin&quot;}]"></div>

# romidepsin

- **generic name:** romidepsin
- **ATC codes:** `L01XH02`, `L01XX39`
- **DrugBank:** [DB06176](https://go.drugbank.com/drugs/DB06176) · **PubChem:** [CID 57515973](https://pubchem.ncbi.nlm.nih.gov/compound/57515973)
- **molar mass:** 540.69 g/mol (C24H36N4O6S2) — DrugBank
- **groups:** approved, investigational

## About

Romidepsin is an anticancer drug used to treat lymphoma, including cutaneous T-cell lymphoma (mycosis fungoides) and other mature T-cell lymphomas. It is approved for use, mainly in the treatment of T-cell lymphomas, though a marketing application was refused in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7363205](https://www.wikidata.org/wiki/Q7363205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| romidepsin | parent | 540.69 | C24H36N4O6S2 | DrugBank | [57515973](https://pubchem.ncbi.nlm.nih.gov/compound/57515973) | Woo_2009 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:38 | 0:58 | 0/0/1 | 1/0/0 | 0/0/0 | 91,398/4,934 | einfracz / qwen3.8-27b | 3 | 3/0 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Woo_2009_reference](drugs/drug_romidepsin/Romidepsin_Woo2009_reference.md) | — | 1-compartment (no model) | 1 | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Moltó_2021_apoptosis_markers_in_CD4_T_cells](drugs/drug_romidepsin/pd_Molt_2021_apoptosis_markers_in_CD4_T_cells.md) | apoptosis markers in CD4+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moltó_2021_expression_of_exhaustion_markers_by_CD4_T_cells](drugs/drug_romidepsin/pd_Molt_2021_expression_of_exhaustion_markers_by_CD4_T_cells.md) | expression of exhaustion markers by CD4+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Moltó_2021_expression_of_exhaustion_markers_by_CD8_T_cells](drugs/drug_romidepsin/pd_Molt_2021_expression_of_exhaustion_markers_by_CD8_T_cells.md) | expression of exhaustion markers by CD8+ T cells ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Moltó_2021_CD4](drugs/drug_romidepsin/pd_Molt_2021_CD4.md) | CD4+ counts ← romidepsin · direct linear effect | — | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=romidepsin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), HDAC1 (target), HDAC2 (inhibitor), HDAC2 (target), HDAC4 (inhibitor), HDAC6 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moltó_2021.pdf` | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) | [33367767](https://pubmed.ncbi.nlm.nih.gov/33367767) | The paper describes a population PK model for romidepsin, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence text. |
| `Woo_2009.pdf` | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | popPK | 10 | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) | [19228751](https://pubmed.ncbi.nlm.nih.gov/19228751) | The paper is a population PK study of romidepsin in humans, and the abstract reports the population clearance (15.9 L/h), but other parameters like volume of distribution and intercompartmental clearance are not numerically provided in the extracted text. |

<sub>queue written 2026-10-06T21:38:10.595361+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mejia_2014 | irrelevant | 0 | 0 | This is an in-vitro natural product chemistry and pharmacology study where romidepsin is used only as a positive control for potency, with no pharmacokinetic data reported. |
| popPK | Moltó_2021 | relevant | 10 | 0 | The paper describes a population PK model for romidepsin, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Peer_2018 | irrelevant | 0 | 0 | The paper discusses belinostat, not romidepsin. |
| popPK | Tseng_2015 | irrelevant | 0 | 0 | The study focuses on the anticachectic activity of AR-42, with romidepsin serving only as a comparator agent and no PK parameters reported. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | This study investigates romidepsin's ability to reverse HIV latency in vitro and ex vivo, reporting mechanistic data (EC50, fold-changes in HIV RNA) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for romidepsin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:38 UTC</sub>
