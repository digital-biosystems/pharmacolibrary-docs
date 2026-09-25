<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_AlbanellFernndez2025_reference&quot;,&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_AlbanellFernndez2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Hodiamont2022v2_reference&quot;,&quot;label&quot;:&quot;Hodiamont_2022_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Hodiamont2022v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# gentamicin

- **generic name:** gentamicin
- **ATC codes:** `D06AX07`, `J01GB03`, `S01AA11`, `S02AA14`, `S03AA06`
- **DrugBank:** [DB00798](https://go.drugbank.com/drugs/DB00798)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Gentamicin is a bactericidal aminoglycoside that was discovered and isolated from _Micromonospora purpurea_ in 1963.[A234349] It is one of the most frequently prescribed aminoglycosides due to its spectrum of activity, low cost, and availability.[A234339,A234354] Gentamicin is effective against both gram-positive and gram-negative organisms but is particularly useful for the treatment of severe gram-negative infections including those caused by _Pseudomonas aeruginosa_.[A233325,A234359,A234364] There is the added benefit of synergy when gentamicin is co-administered with other antibacterials such as beta-lactams.[A234364] This synergistic activity is not only important for the treatment of complex infections, but can also contribute to dose optimization and reduced adverse effects.[A234359,A234364]

Although gentamicin is well-established and may be used in a variety of clinical applications, it is also associated with severe adverse effects including nephrotoxicity and ototoxicity which may limit its use.[A234369]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/1/0 | 0/0/0 | 0/0/0 | not captured | not captured | 16 | 3/0 | 8/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Crcek_2019_reference](drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md) | Crcek M et al., A review of population pharmacokinetic…, Journal of clinical pharmac… (2019) | [10.1111/jcpt.12850](https://doi.org/10.1111/jcpt.12850) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Albanell-Fernández_2025_reference](drugs/drug_gentamicin/Gentamicin_AlbanellFernndez2025_reference.md) | Albanell-Fernández M et al., A Review of Vancomycin, Gentamicin, and…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hodiamont_2022_2_reference](drugs/drug_gentamicin/Gentamicin_Hodiamont2022v2_reference.md) | Hodiamont CJ et al., Clinical Pharmacokinetics of Gentamicin…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01143-0](https://doi.org/10.1007/s40262-022-01143-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gentamicin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | `ABCC2` substrate, `SLC22A2` substrate | DrugBank actor |
| excretion | liver | `ABCC2` substrate | DrugBank actor |
| excretion | small intestine | `ABCC2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: LRP2 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 352 matched, 20 returned
- **screened:** 3  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wang_2019.pdf` | Wang H et al., Population Pharmacokinetic Modeling of…, Journal of clinical pharmac… (2019) | popPK | 10 | [10.1002/jcph.1479](https://doi.org/10.1002/jcph.1479) | [31286535](https://pubmed.ncbi.nlm.nih.gov/31286535) | This is a primary population PK study for gentamicin in pediatric patients, and quantitative disposition parameters (CL, V1) are directly reported in the main text and Table 4. |

<sub>queue written 2026-07-18T04:41:19.703994+00:00 · relevance threshold 5</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cheng_2021 | irrelevant | 1 | 0 | This is a systematic review summarizing external evaluation methodologies for antibiotic popPK models and contains no original quantitative pharmacokinetic parameters for gentamicin. |
| popPK | Marsot_2012 | irrelevant | 2 | 0 | This is a review article that summarizes study metadata and covariates but does not report any original quantitative pharmacokinetic parameter values for gentamicin. |
| popPK | Whiting_1986 | irrelevant | 1 | 0 | Gentamicin is merely cited as an example in this methodological review, and no quantitative pharmacokinetic parameters for it are provided. |
| popPK | Yalcin_2022 | irrelevant | 2 | 0 | This is a systematic review and no quantitative pharmacokinetic parameters for gentamicin are reported in the provided evidence. |
| popPK | de_2018 | irrelevant | 1 | 0 | Gentamicin is only briefly cited as an example from another review, and no original population PK parameter values for it are reported in the provided text or tables. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:09 UTC</sub>
