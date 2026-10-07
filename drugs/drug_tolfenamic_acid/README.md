<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;tolfenamic acid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TolfenamicAcid_Corum2024_reference&quot;,&quot;label&quot;:&quot;Corum_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolfenamic_acid/TolfenamicAcid_Corum2024_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TolfenamicAcid_Corum2024v2_reference&quot;,&quot;label&quot;:&quot;Corum_2024_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolfenamic_acid/TolfenamicAcid_Corum2024v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TolfenamicAcid_Landoni1996_reference&quot;,&quot;label&quot;:&quot;Landoni_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tolfenamic_acid/TolfenamicAcid_Landoni1996_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tolfenamic acid

- **generic name:** tolfenamic acid
- **ATC codes:** `M01AG02`
- **DrugBank:** [DB09216](https://go.drugbank.com/drugs/DB09216) · **PubChem:** [CID 610479](https://pubchem.ncbi.nlm.nih.gov/compound/610479)
- **molar mass:** 261.704 g/mol (C14H12ClNO2) — DrugBank
- **groups:** approved

## About

Tolfenamic acid is a non-steroidal anti-inflammatory drug (a fenamate) used as an analgesic and anti-inflammatory, for example for pain and rheumatic conditions. It is an approved medicine, though not authorised by the European Medicines Agency, and is used only in some countries rather than worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q59412](https://www.wikidata.org/wiki/Q59412) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tolfenamic acid (tolfenamic_acid) | parent | 261.704 | C14H12ClNO2 | DrugBank | [610479](https://pubchem.ncbi.nlm.nih.gov/compound/610479) | Corum_2026, Jaussaud_1992, Landoni_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:29 | 3:24 | 3/1/1 | 0/0/2 | 0/0/0 | 294,051/23,024 | einfracz / qwen3.8-27b | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span> | [Corum_2024_reference](drugs/drug_tolfenamic_acid/TolfenamicAcid_Corum2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Corum O et al., Plasma and Milk Pharmacokinetics and Es…, Veterinary medicine and sci… (2024) | [10.1002/vms3.70047](https://doi.org/10.1002/vms3.70047) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (fish), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">fish</span> | [Corum_2024_2_reference](drugs/drug_tolfenamic_acid/TolfenamicAcid_Corum2024v2_reference.md) | ▶ model + simulator | 2-compartment, IV | 3 | Corum O et al., Pharmacokinetics, bioavailability and p…, Veterinary medicine and sci… (2024) | [10.1002/vms3.1533](https://doi.org/10.1002/vms3.1533) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Landoni_1996_reference](drugs/drug_tolfenamic_acid/TolfenamicAcid_Landoni1996_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Landoni MF et al., Pharmacokinetics and pharmacodynamics o…, Research in veterinary scie… (1996) | [10.1016/s0034-5288(96)90106-x](https://doi.org/10.1016/s0034-5288(96)90106-x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>route_to: `human_review`</sub> | [Corum_2026_reference](drugs/drug_tolfenamic_acid/TolfenamicAcid_Corum2026_reference.md) | — | 1-compartment (no model) | 3 | Corum O et al., Pharmacokinetics and Bioavailability of…, Veterinary medicine and sci… (2026) | [10.1002/vms3.71024](https://doi.org/10.1002/vms3.71024) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Jaussaud_1992_reference](drugs/drug_tolfenamic_acid/TolfenamicAcid_Jaussaud1992_reference.md) | — | 1-compartment (no model) | 3 | Jaussaud P et al., Pharmacokinetics of tolfenamic acid in…, Equine veterinary journal.… (1992) | [10.1111/j.2042-3306.1992.tb04778.x](https://doi.org/10.1111/j.2042-3306.1992.tb04778.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Sidhu_2005_PGE2](drugs/drug_tolfenamic_acid/pd_Sidhu_2005_PGE2.md) | prostaglandin E2 (PGE2) ← tolfenamic acid · direct sigmoid Emax (Hill) effect | model (no simulator) | Sidhu PK et al., Influence of marbofloxacin on the pharm…, Journal of veterinary pharm… (2005) | [10.1111/j.1365-2885.2004.00633.x](https://doi.org/10.1111/j.1365-2885.2004.00633.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (cattle), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">cattle</span> | [Sidhu_2005_TxB2](drugs/drug_tolfenamic_acid/pd_Sidhu_2005_TxB2.md) | thromboxane B2 ← tolfenamic acid · direct sigmoid Emax (Hill) effect | model (no simulator) | Sidhu PK et al., Influence of marbofloxacin on the pharm…, Journal of veterinary pharm… (2005) | [10.1111/j.1365-2885.2004.00633.x](https://doi.org/10.1111/j.1365-2885.2004.00633.x) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span> | [Sidhu_2006_PGE2](drugs/drug_tolfenamic_acid/pd_Sidhu_2006_PGE2.md) | exudate PGE2 ← tolfenamic_acid · direct sigmoid Emax (Hill) effect | model (no simulator) | Sidhu PK et al., Pharmacokinetic and pharmacodynamic int…, Research in veterinary scie… (2006) | [10.1016/j.rvsc.2005.04.008](https://doi.org/10.1016/j.rvsc.2005.04.008) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span> | [Sidhu_2006_TxB2](drugs/drug_tolfenamic_acid/pd_Sidhu_2006_TxB2.md) | serum TxB2 ← tolfenamic_acid · direct sigmoid Emax (Hill) effect | model (no simulator) | Sidhu PK et al., Pharmacokinetic and pharmacodynamic int…, Research in veterinary scie… (2006) | [10.1016/j.rvsc.2005.04.008](https://doi.org/10.1016/j.rvsc.2005.04.008) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tolfenamic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (target), PTGS2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 29 matched, 20 returned
- **screened:** 10  ·  **relevant:** 10
- **records:** 5  ·  extracted 3  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cetin_2022.pdf` | Cetin G et al., Pharmacokinetics of intravenous meloxic…, British poultry science (2022) | popPK | 10 | [10.1080/00071668.2021.1990211](https://doi.org/10.1080/00071668.2021.1990211) | [34633873](https://pubmed.ncbi.nlm.nih.gov/34633873) | The study reports quantitative pharmacokinetic parameters (CL, Vss, t1/2) for tolfenamic acid in chukar partridges, with values explicitly stated in the abstract. |
| `Durna_2025.pdf` | Durna Corum D et al., Pharmacokinetics of tolfenamic acid in…, British poultry science (2025) | popPK | 10 | [10.1080/00071668.2024.2410365](https://doi.org/10.1080/00071668.2024.2410365) | [39452158](https://pubmed.ncbi.nlm.nih.gov/39452158) | The paper reports quantitative pharmacokinetic parameters (CL, V, t1/2, Cmax, bioavailability) for tolfenamic acid in ducks, with all values explicitly stated in the provided evidence. |
| `Jaussaud_1992.pdf` | Jaussaud P et al., Pharmacokinetics of tolfenamic acid in…, Equine veterinary journal.… (1992) | popPK | 10 | [10.1111/j.2042-3306.1992.tb04778.x](https://doi.org/10.1111/j.2042-3306.1992.tb04778.x) | [9109966](https://pubmed.ncbi.nlm.nih.gov/9109966) | The study reports specific quantitative PK parameters (CL, Vss, t1/2, Cmax) for tolfenamic acid in horses. |
| `Landoni_1996.pdf` | Landoni MF et al., Pharmacokinetics and pharmacodynamics o…, Research in veterinary scie… (1996) | popPK | 10 | [10.1016/s0034-5288(96)90106-x](https://doi.org/10.1016/s0034-5288(96)90106-x) | [8819190](https://pubmed.ncbi.nlm.nih.gov/8819190) | The study reports quantitative PK parameters (half-life, volume, clearance) for tolfenamic acid in calves with values explicitly stated in the abstract. |
| `Sidhu_2006.pdf` | Sidhu PK et al., Pharmacokinetic and pharmacodynamic int…, Research in veterinary scie… (2006) | popPK | 10 | [10.1016/j.rvsc.2005.04.008](https://doi.org/10.1016/j.rvsc.2005.04.008) | [16005916](https://pubmed.ncbi.nlm.nih.gov/16005916) | The study reports quantitative pharmacokinetic parameters (AUC, Cmax, t1/2, Vd, Cl) for tolfenamic acid in goats directly in the abstract. |
| `Sidhu_2005.pdf` | Sidhu PK et al., Influence of marbofloxacin on the pharm…, Journal of veterinary pharm… (2005) | popPK | 9 | [10.1111/j.1365-2885.2004.00633.x](https://doi.org/10.1111/j.1365-2885.2004.00633.x) | [15720523](https://pubmed.ncbi.nlm.nih.gov/15720523) | The study reports quantitative pharmacokinetic parameters (Vd, Cl, AUC, Cmax) for tolfenamic acid in calves. |

<sub>queue written 2026-10-07T01:26:38.198902+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cetin_2021 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of ceftriaxone, with tolfenamic acid serving only as a co-administered agent to test for drug interactions. |
| popPK | Durna_2020 | irrelevant | 2 | 0 | The study reports pharmacokinetic parameters for levofloxacin, with tolfenamic acid acting only as a co-administered comparator agent, and no quantitative PK values for tolfenamic acid itself are provided. |
| popPK | Garg_2012 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study of Slo2.1 channels in Xenopus oocytes and does not report pharmacokinetic disposition parameters for tolfenamic acid. |
| popPK | Lees_2004 | irrelevant | 2 | 0 | This is a review article that discusses principles of PK-PD modelling and mentions tolfenamic acid only in the context of PD parameters (COX inhibition) in veterinary species, without providing specific quantitative PK disposition parameters (CL, V, etc.) for tolfenamic acid. |
| popPK | Pedersen_1994 | irrelevant | 4 | 1 | The text is a review summarizing general pharmacokinetic properties (half-life, clearance, bioavailability) without providing specific compartmental model parameters (Vd, Q) or individual dataset values, and focuses heavily on formulation development. |
| popPK | Poradowski_2019 | irrelevant | 0 | 0 | The study is an in vitro cytotoxicity assay of NSAIDs on cancer cells and does not report pharmacokinetic parameters for tolfenamic acid. |
| popPK | Sidhu_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of marbofloxacin, with tolfenamic acid serving only as a co-administered drug to assess interaction effects, and no PK parameters for tolfenamic acid are reported. |
| popPK | Sidhu_2011 | irrelevant | 2 | 1 | The study focuses on the pharmacokinetics of marbofloxacin, with tolfenamic acid serving only as a co-administered agent to assess drug interactions. |
| popPK | Wu_2001 | irrelevant | 0 | 0 | This is an in-vitro electrophysiology study examining ion channel activity, not a pharmacokinetic study reporting disposition parameters for tolfenamic acid. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 01:26 UTC</sub>
