<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03B&quot;,&quot;href&quot;:&quot;atc/A03B.md&quot;},{&quot;label&quot;:&quot;atropine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atropine_Strm2021_reference&quot;,&quot;label&quot;:&quot;Str\u00f6m_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atropine/Atropine_Strm2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# atropine

- **generic name:** atropine
- **ATC codes:** `A03BA01`, `A03CB03`, `S01FA01`, `V03AB54`
- **DrugBank:** [DB00572](https://go.drugbank.com/drugs/DB00572) · **PubChem:** [CID 174174](https://pubchem.ncbi.nlm.nih.gov/compound/174174)
- **molar mass:** 289.3694 g/mol (C17H23NO3) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Atropine is a belladonna alkaloid used for conditions such as bradycardia and cardiac arrest, uveitis, gastric ulcer, and as a mydriatic in eye care. It is widely used, appears on the WHO essential medicines list, is approved for human and veterinary use, and is authorised in the European Union for myopia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q26272](https://www.wikidata.org/wiki/Q26272) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| atropine | parent | 289.369 | C17H23NO3 | DrugBank | [174174](https://pubchem.ncbi.nlm.nih.gov/compound/174174) | Hinderling_1985, Parrot_2024, Ström_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:11 | 5:39 | 1/2/1 | 0/0/0 | 0/0/0 | 81,057/16,382 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.931). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Ström_2021_reference](drugs/drug_atropine/Atropine_Strm2021_reference.md) | ▶ model + simulator | 2-compartment, oral | 11 | Ström L et al., Topical ophthalmic atropine in horses,…, BMC veterinary research (2021) | [10.1186/s12917-021-02847-4](https://doi.org/10.1186/s12917-021-02847-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.2). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Hinderling_1985_reference](drugs/drug_atropine/Atropine_Hinderling1985_reference.md) | — | 1-compartment (no model) | 3 | Hinderling PH et al., Integrated pharmacokinetics and pharmac…, Journal of pharmaceutical s… (1985) | [10.1002/jps.2600740702](https://doi.org/10.1002/jps.2600740702) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Ekstrand_2022_reference](drugs/drug_atropine/Atropine_Ekstrand2022_reference.md) | — | 1-compartment (no model) | 0 | Ekstrand C et al., Plasma atropine concentrations associat…, Frontiers in veterinary sci… (2022) | [10.3389/fvets.2022.951300](https://doi.org/10.3389/fvets.2022.951300) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Parrot_2024_reference](drugs/drug_atropine/Atropine_Parrot2024_reference.md) | — | 1-compartment (no model) | 1 | Parrot M et al., Clinical pharmacokinetics of atropine o…, Clinical and translational… (2024) | [10.1111/cts.13753](https://doi.org/10.1111/cts.13753) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=atropine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), CHRNA4 (substrate), CHRNB2 (substrate), GLRA1 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 689 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 1  ·  needs_review 1  ·  rejected 2  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ekstrand_2022.pdf` | Ekstrand C et al., Plasma atropine concentrations associat…, Frontiers in veterinary sci… (2022) | popPK | 10 | [10.3389/fvets.2022.951300](https://doi.org/10.3389/fvets.2022.951300) | [36118347](https://pubmed.ncbi.nlm.nih.gov/36118347) | The paper reports quantitative population PK parameters (Vc, Vp, Vsp, CL) for atropine in horses with values explicitly listed in the abstract. |
| `Hinderling_1985.pdf` | Hinderling PH et al., Integrated pharmacokinetics and pharmac…, Journal of pharmaceutical s… (1985) | popPK | 10 | [10.1002/jps.2600740702](https://doi.org/10.1002/jps.2600740702) | [4032240](https://pubmed.ncbi.nlm.nih.gov/4032240) | The abstract explicitly reports quantitative PK parameters for atropine in humans, including half-lives (1 and 140 min), volume of distribution (210 L), and renal clearance (660 mL/min). |
| `Parrot_2024.pdf` | Parrot M et al., Clinical pharmacokinetics of atropine o…, Clinical and translational… (2024) | popPK | 10 | [10.1111/cts.13753](https://doi.org/10.1111/cts.13753) | [38465519](https://pubmed.ncbi.nlm.nih.gov/38465519) | The study reports quantitative PK parameters (Cmax, AUC, ka) for atropine in humans, though clearance and volume values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-04T13:06:01.035225+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kim_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dexmedetomidine, while atropine is only mentioned as a co-administered induction agent. |
| popPK | Li_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for theophylline, with atropine acting as a co-administered agent to test for drug interactions, not as the subject drug. |
| popPK | Page_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of levetiracetam, with atropine serving only as a therapeutic agent for cardiovascular toxicity. |
| popPK | Reynaerts_2022 | irrelevant | 0 | 0 | Atropine is used as a co-administered agent in a sweat test protocol, not as the subject of a pharmacokinetic study. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 13:06 UTC</sub>
