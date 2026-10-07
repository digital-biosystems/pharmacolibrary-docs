<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M03A&quot;,&quot;href&quot;:&quot;atc/M03A.md&quot;},{&quot;label&quot;:&quot;alcuronium&quot;}]"></div>

# alcuronium

- **generic name:** alcuronium
- **ATC codes:** `M03AA01`
- **DrugBank:** [DB13648](https://go.drugbank.com/drugs/DB13648) · **PubChem:** not captured
- **molar mass:** 666.909 g/mol (C44H50N4O2) — DrugBank
- **groups:** experimental

## About

Alcuronium is a peripherally acting muscle relaxant belonging to the curare alkaloid group. It is not an approved medicine today and appears only as an experimental compound, so its current clinical use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074375](https://www.wikidata.org/wiki/Q27074375) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| alcuronium | parent | 666.909 | C44H50N4O2 | DrugBank | — | Walker_1983 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:56 | 0:54 | 0/1/0 | 2/0/0 | 0/0/0 | 33,226/2,567 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Walker_1983_reference](drugs/drug_alcuronium/Alcuronium_Walker1983_reference.md) | — | 1-compartment (no model) | 1 | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Franken_2000_3H_NMS_binding](drugs/drug_alcuronium/pd_Franken_2000_3H_NMS_binding.md) | Equilibrium binding of [3H]NMS at M2-receptors biomarker turnover ← alcuronium | — | Franken C et al., Testing the specificity of allosteric m…, Naunyn-Schmiedeberg's archi… (2000) | [10.1007/s002109900176](https://doi.org/10.1007/s002109900176) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Franken_2000_3H_NMS_dissociation](drugs/drug_alcuronium/pd_Franken_2000_3H_NMS_dissociation.md) | [3H]NMS dissociation at M2-receptors biomarker turnover ← alcuronium | — | Franken C et al., Testing the specificity of allosteric m…, Naunyn-Schmiedeberg's archi… (2000) | [10.1007/s002109900176](https://doi.org/10.1007/s002109900176) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Walker_1983_paralysis](drugs/drug_alcuronium/pd_Walker_1983_paralysis.md) | paralysis ← alcuronium · direct Emax (saturable) effect | — | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=alcuronium) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA7 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Walker_1980.pdf` | Walker J et al., Clinical pharmacokinetics of alcuronium…, European journal of clinica… (1980) | popPK | 10 | [10.1007/BF00570163](https://doi.org/10.1007/BF00570163) | [7398736](https://pubmed.ncbi.nlm.nih.gov/7398736) | The paper reports quantitative pharmacokinetic parameters (CL, Vd, t1/2) for alcuronium in humans, with specific mean values provided in the text. |
| `Walker_1983.pdf` | Walker JS et al., Alcuronium kinetics and plasma concentr…, Clinical pharmacology and t… (1983) | popPK | 9 | [10.1038/clpt.1983.69](https://doi.org/10.1038/clpt.1983.69) | [6831830](https://pubmed.ncbi.nlm.nih.gov/6831830) | The paper reports the PK/PD kinetics of alcuronium in humans, specifically providing the effect site equilibration rate constant (ke0) and effect concentration (C95), which are core pharmacokinetic/pharmacodynamic parameters, although standard disposition parameters like CL and V are only stated to be consistent with previous data rather than explicitly listed here. |
| `Tränkle_1996.pdf` | Tränkle C et al., Search for lead structures to develop n…, The Journal of pharmacology… (1996) | pd | 5 | not captured | [8930201](https://www.ncbi.nlm.nih.gov/pubmed/8930201) | metadata signals extractable PD data (EC50) |
| `Birmingham_1980.pdf` | Birmingham AT et al., A comparison of the skeletal neuromuscu…, British journal of pharmaco… (1980) | pd | 4 | [10.1111/j.1476-5381.1980.tb08730.x](https://doi.org/10.1111/j.1476-5381.1980.tb08730.x) | [6108148](https://www.ncbi.nlm.nih.gov/pubmed/6108148) | metadata signals extractable PD data (concentration-effect) |
| `Schuh_1981.pdf` | Schuh FT, [On dose-response curves and the recept…, Der Anaesthesist (1981) | pd | 4 | not captured | [6455927](https://www.ncbi.nlm.nih.gov/pubmed/6455927) | metadata signals extractable PD data (Emax) |

<sub>queue written 2026-10-07T01:56:05.248026+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Birmingham_1980 | irrelevant | 0 | 0 | no_text gate: only 119 chars of text extracted (&lt; 400) |
| popPK | Buzello_1978 | irrelevant | 1 | 0 | This is a review paper that synthesizes data from the literature without providing original quantitative parameter values for alcuronium in the text. |
| popPK | Buzello_1978_2 | irrelevant | 2 | 0 | The paper is a theoretical analysis of literature data describing a model mechanism, and the extracted evidence contains no specific numeric PK parameter values (CL, V, ka) for alcuronium. |
| popPK | Franken_2000 | irrelevant | 0 | 0 | This is an in-vitro binding/mechanistic study of receptor allosteric modulation, not a pharmacokinetic study of alcuronium disposition parameters. |
| popPK | Schmitt_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of midazolam, with alcuronium used only as a co-administered neuromuscular blocker without PK analysis. |
| popPK | Schuh_1981 | irrelevant | 0 | 0 | The study describes dose-response curves for neuromuscular blockade (pharmacodynamics) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for alcuronium. |
| popPK | Tränkle_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of allosteric modulation of muscarinic receptors, not a pharmacokinetic study of alcuronium. |
| popPK | Tränkle_1998 | irrelevant | 0 | 0 | The study focuses on receptor binding affinity (pKi) of alcuronium at M2 receptors in porcine heart tissue, not on pharmacokinetic disposition parameters. |
| popPK | Zahn_2002 | irrelevant | 0 | 0 | The study is a pharmacological/mechanistic investigation of allosteric receptor modulation in tissue and cell models, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Zlotos_2004 | irrelevant | 0 | 0 | The study is an in vitro SAR/QSAR binding assay for caracurine analogues, and alcuronium is only mentioned as a reference for binding affinity, not as the subject of a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:56 UTC</sub>
