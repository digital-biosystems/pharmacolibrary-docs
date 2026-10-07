<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01C&quot;,&quot;href&quot;:&quot;atc/M01C.md&quot;},{&quot;label&quot;:&quot;sodium aurothiomalate&quot;}]"></div>

# sodium aurothiomalate

- **generic name:** sodium aurothiomalate
- **ATC codes:** `M01CB01`
- **DrugBank:** [DB09276](https://go.drugbank.com/drugs/DB09276) · **PubChem:** [CID 16760302](https://pubchem.ncbi.nlm.nih.gov/compound/16760302)
- **molar mass:** 390.07 g/mol (C4H3AuNa2O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Sodium aurothiomalate is a gold preparation that was used as an injectable disease-modifying treatment for rheumatoid arthritis. It is no longer in use; it has been withdrawn, largely because safer and better-tolerated modern antirheumatic drugs replaced gold therapy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20885557](https://www.wikidata.org/wiki/Q20885557) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| gold | metabolite | 196.97 | Au | PubChem | [23985](https://pubchem.ncbi.nlm.nih.gov/compound/23985) | Melethil_1987 |
| sodium_aurothiomalate | metabolite | 390.07 | C4H3AuNa2O4S | DrugBank | [16760302](https://pubchem.ncbi.nlm.nih.gov/compound/16760302) | Melethil_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:43 | 0:34 | 0/1/0 | 1/0/0 | 0/0/0 | 58,351/4,378 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Melethil_1987_reference](drugs/drug_sodium_aurothiomalate/SodiumAurothiomalate_Melethil1987_reference.md) | — | 1-compartment (no model) | 2 | Melethil S et al., Pharmacokinetics of gold sodium thiomal…, Pharmaceutical research (1987) | [10.1023/a:1016453421958](https://doi.org/10.1023/a:1016453421958) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_BrdU_incorporation](drugs/drug_sodium_aurothiomalate/pd_Bashtanova_2025_BrdU_incorporation.md) | DNA replication ← sodium aurothiomalate · direct Emax (saturable) effect | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_CellTiter_Glo](drugs/drug_sodium_aurothiomalate/pd_Bashtanova_2025_CellTiter_Glo.md) | Cell viability ← sodium aurothiomalate · direct Emax (saturable) effect | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_CellTiter_Glo_2](drugs/drug_sodium_aurothiomalate/pd_Bashtanova_2025_CellTiter_Glo_2.md) | Cell viability ← sodium aurothiomalate · direct Emax (saturable) effect | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Bashtanova_2025_PARP_1](drugs/drug_sodium_aurothiomalate/pd_Bashtanova_2025_PARP_1.md) | PARP-1 activity ← sodium aurothiomalate · direct Emax (saturable) effect | — | Bashtanova U et al., The zinc finger domains of PARP-1 are s…, FEBS letters (2025) | [10.1002/1873-3468.70224](https://doi.org/10.1002/1873-3468.70224) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sodium_aurothiomalate) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `UGT1A1` inhibitor | DrugBank actor |
| metabolism | small intestine | `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 3 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Melethil_1987.pdf` | Melethil S et al., Pharmacokinetics of gold sodium thiomal…, Pharmaceutical research (1987) | popPK | 10 | [10.1023/a:1016453421958](https://doi.org/10.1023/a:1016453421958) | [3150043](https://pubmed.ncbi.nlm.nih.gov/3150043) | The paper reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, absorption rate) for sodium aurothiomalate (gold sodium thiomalate) in rabbits, with all numeric values explicitly stated in the evidence. |

<sub>queue written 2026-10-07T01:42:44.345334+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bashtanova_2025 | irrelevant | 0 | 0 | The paper describes in vitro enzymatic inhibition and cellular toxicity mechanisms of sodium aurothiomalate, but contains no pharmacokinetic data (CL, Vd, ka, t1/2). |
| popPK | Psychoyos_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay of neutrophil chemotaxis inhibition and does not report pharmacokinetic disposition parameters for sodium_aurothiomalate. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:42 UTC</sub>
