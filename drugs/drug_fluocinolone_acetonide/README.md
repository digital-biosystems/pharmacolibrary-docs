<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;fluocinolone acetonide&quot;}]"></div>

# fluocinolone acetonide

- **generic name:** fluocinolone acetonide
- **ATC codes:** `C05AA10`, `D07AC04`, `D07BC02`, `D07CC02`, `S01BA15`, `S01CA10`, `S02BA08`, `S02CA05`
- **DrugBank:** [DB00591](https://go.drugbank.com/drugs/DB00591) · **PubChem:** [CID 6215](https://pubchem.ncbi.nlm.nih.gov/compound/6215)
- **molar mass:** 452.4882 g/mol (C24H30F2O6) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Fluocinolone acetonide is a potent corticosteroid used to reduce inflammation and itching, mainly in skin conditions, and also in preparations for haemorrhoids, eye and ear inflammation. It is an approved medicine, used in topical dermatological, rectal, ophthalmic and otological products, and is also approved for veterinary use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q924467](https://www.wikidata.org/wiki/Q924467) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:47 | 1:32 | 0/0/0 | 1/0/1 | 0/0/0 | 47,530/1,670 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/5 | 2/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nehmé_2009_GR_binding](drugs/drug_fluocinolone_acetonide/pd_Nehm_2009_GR_binding.md) | GR binding affinity ← fluocinolone acetonide · direct sigmoid Emax (Hill) effect | — | Nehmé A et al., Glucocorticoids with different chemical…, BMC medical genomics (2009) | [10.1186/1755-8794-2-58](https://doi.org/10.1186/1755-8794-2-58) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Nehmé_2009_GR_transactivation](drugs/drug_fluocinolone_acetonide/pd_Nehm_2009_GR_transactivation.md) | GR transactivation activity ← fluocinolone acetonide · direct sigmoid Emax (Hill) effect | — | Nehmé A et al., Glucocorticoids with different chemical…, BMC medical genomics (2009) | [10.1186/1755-8794-2-58](https://doi.org/10.1186/1755-8794-2-58) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Zvidzayi_2021_AUEC](drugs/drug_fluocinolone_acetonide/pd_Zvidzayi_2021_AUEC.md) | skin blanching response ← fluocinolone acetonide · direct Emax (saturable) effect | — | Zvidzayi M et al., A Novel Approach to Assess the Potency…, Pharmaceutics (2021) | [10.3390/pharmaceutics13091456](https://doi.org/10.3390/pharmaceutics13091456) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fluocinolone_acetonide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ANXA1 (inducer), ANXA2 (inducer), ANXA3 (inducer), ANXA4 (inducer), ANXA5 (inducer), NR3C1 (target), PLA2G1B (inhibitor), SERPINA6 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `dArgy_1989.pdf` | d'Argy R et al., Effects of immunosuppressive chemicals…, Pharmacology & toxicology (1989) | pd | 4 | [10.1111/j.1600-0773.1989.tb00596.x](https://doi.org/10.1111/j.1600-0773.1989.tb00596.x) | [2755908](https://www.ncbi.nlm.nih.gov/pubmed/2755908) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T22:46:35.322095+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barar_2016 | irrelevant | 0 | 0 | The paper is a review of ocular drug delivery technologies and does not report any quantitative pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Barar_2016 | not_relevant | 0 | 0 | The paper is a general review of ocular drug delivery technologies and does not report specific pharmacodynamic or exposure-response data for fluocinolone acetonide. |
| popPK | Chacun_2026 | irrelevant | 0 | 0 | The study evaluates the efficacy of selective laser trabeculoplasty for intraocular pressure control and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Hennein_2016 | irrelevant | 0 | 0 | The study is a clinical trial evaluating surgical outcomes (IOP, visual acuity) and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Hennings_1990 | irrelevant | 0 | 0 | The paper is an in vitro cell culture study on tumor promotion where fluocinolone acetonide is used only as a test inhibitor, with no pharmacokinetic parameters reported. |
| PD | Hennings_1990 | not_relevant | 1 | 0 | The paper mentions fluocinolone acetonide only as a qualitative inhibitor of colony formation in an in vitro model, without providing any numeric dose-response data, concentration-effect curves, or PD parameters for the drug. |
| popPK | Lax_2022 | irrelevant | 0 | 0 | The paper is a clinical review of topical corticosteroid strategies for eczema and does not report pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Lax_2022 | not_relevant | 0 | 0 | The paper is a clinical systematic review comparing treatment strategies (potency, frequency, duration) and does not report pharmacokinetic or pharmacodynamic modeling or numeric exposure-response parameters for fluocinolone acetonide. |
| popPK | MARTINA_1965 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| PD | MARTINA_1965 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Nehmé_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of gene expression and receptor binding in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Queille-Roussel_2016 | irrelevant | 0 | 0 | The study is a pharmacodynamic vasoconstriction assay where fluocinolone acetonide serves only as a comparator, and no pharmacokinetic parameters are reported. |
| PD | Queille-Roussel_2016 | not_relevant | 2 | 1 | The study reports comparative vasoconstriction AUCs for different formulations but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., Emax, EC50) for fluocinolone acetonide. |
| popPK | Sen_2016 | irrelevant | 0 | 0 | The study reports visual acuity outcomes following cataract surgery, not pharmacokinetic parameters for fluocinolone acetonide. |
| popPK | Xie_2025 | irrelevant | 2 | 0 | The study focuses on formulation development and in vitro/in vivo release kinetics (pharmacodynamics) rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for fluocinolone acetonide. |
| PD | Xie_2025 | not_relevant | 2 | 1 | The paper describes a drug delivery formulation and qualitative in vivo efficacy (inflammation decrease) but does not provide numeric concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for fluocinolone acetonide. |
| popPK | Yoon_2019 | irrelevant | 0 | 0 | The paper is a computational study on drug prioritization using biological networks and does not report any pharmacokinetic parameters for fluocinolone acetonide. |
| PD | Yoon_2019 | not_relevant | 0 | 0 | The paper describes a computational method for prioritizing functional drug actions using biological networks and SVMs, containing no pharmacokinetic or pharmacodynamic data for fluocinolone acetonide. |
| popPK | Zvidzayi_2021 | irrelevant | 0 | 0 | The study reports pharmacodynamic potency parameters (Emax, ED50) from a vasoconstrictor assay, not pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | dArgy_1989 | irrelevant | 0 | 0 | no_text gate: only 94 chars of text extracted (&lt; 400) |
| PD | dArgy_1989 | not_relevant | 0 | 0 | The paper studies the effects of immunosuppressive chemicals on foetal thymus organ cultures and does not report any pharmacodynamic or exposure-response data for fluocinolone acetonide. |
| popPK | Özen_2026 | irrelevant | 0 | 0 | The study evaluates clinical efficacy and anatomical outcomes (BCVA, CMT) of intravitreal implants, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
