<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;aldesleukin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aldesleukin_Chen2000_reference&quot;,&quot;label&quot;:&quot;Chen_2000_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# aldesleukin

- **generic name:** aldesleukin
- **ATC codes:** `L03AC01`
- **DrugBank:** [DB00041](https://go.drugbank.com/drugs/DB00041) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Aldesleukin, a form of interleukin-2, is an immunostimulant used to treat cancers such as melanoma and kidney-related malignancies, and has also been studied for other conditions including HIV infection. It is an approved medicine, mainly used in specialist cancer care, and carries a boxed warning reflecting its significant toxicity.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801763](https://www.wikidata.org/wiki/Q20801763) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:33 | 13:15 | 1/1/0 | 0/1/0 | 0/0/0 | 430,101/7,734 | einfracz / qwen3.8-27b | 22 | 7/6 | 22/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Chen_2000_reference](drugs/drug_aldesleukin/Aldesleukin_Chen2000_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Chen SA et al., Plasma and lymph pharmacokinetics of re…, The Journal of pharmacology… (2000) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Lotze_1985_reference](drugs/drug_aldesleukin/Aldesleukin_Lotze1985_reference.md) | — | 1-compartment (no model) | 1 | Lotze MT et al., In vivo administration of purified huma…, Journal of immunology (Balt… (1985) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from keyword rules on the title and abstract — no LLM answer yet).">human + animal</span> | [Nagi_1989_DNA_synthesis](drugs/drug_aldesleukin/pd_Nagi_1989_DNA_synthesis.md) | lymphocyte proliferation ← rHIL-2 · stimulation effect | — | Nagi AM et al., Recombinant human interleukin-2-induced…, Canadian journal of veterin… (1989) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=aldesleukin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2E1` inhibitor, `CYP3A4` inhibitor, `XDH` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `XDH` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IL2 (modulator), IL2RA (modulator), IL2RA (target), IL2RB (modulator), IL2RB (target), IL2RG (target), PLA2G4A (inducer), PTGS2 (inducer).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 245 matched, 67 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2000.pdf` | Chen SA et al., Plasma and lymph pharmacokinetics of re…, The Journal of pharmacology… (2000) | popPK | 10 | not captured | [10734176](https://pubmed.ncbi.nlm.nih.gov/10734176) | The study reports specific pharmacokinetic parameters (clearance, volume of distribution) for recombinant human interleukin-2 (aldesleukin) in pigs. |
| `Lotze_1985.pdf` | Lotze MT et al., In vivo administration of purified huma…, Journal of immunology (Balt… (1985) | popPK | 8 | not captured | [2993418](https://pubmed.ncbi.nlm.nih.gov/2993418) | The paper describes a pharmacokinetic profile for aldesleukin (rIL-2) in humans, reporting a half-life of 6.9 min and a two-compartment model, but lacks explicit numeric values for clearance, volume, or Q in the provided text. |
| `Yue_2008.pdf` | Yue T et al., Recombinant human interleukin-2 inhalat…, International journal of ph… (2008) | popPK | 7 | [10.1016/j.ijpharm.2008.04.024](https://doi.org/10.1016/j.ijpharm.2008.04.024) | [18539415](https://pubmed.ncbi.nlm.nih.gov/18539415) | The paper reports an in situ two-compartment pharmacokinetic model for rhIL-2 (aldesleukin) in rats, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-06T22:30:47.174989+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beck_2023 | irrelevant | 0 | 0 | The paper is an immunology study on MHC class I-deficient mouse tumors and IL-2 therapeutic efficacy, lacking quantitative pharmacokinetic parameters (CL, V, ka) for aldesleukin. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The paper identifies CD28 and CD40LG as drug targets for aldesleukin using a database, but does not report any pharmacogenomic data linking gene variants to changes in aldesleukin's PK or PD parameters. |
| popPK | Hsu_2023 | irrelevant | 0 | 0 | The paper describes an immunological mechanism of a bifunctional antibody fusion molecule (STAR0602) and does not report pharmacokinetic parameters for aldesleukin. |
| PGx | Klein_2017 | not_relevant | 0 | 0 | The paper describes the design and preclinical evaluation of a novel drug (cergutuzumab amunaleukin) and does not report human pharmacogenomic data for aldesleukin. |
| popPK | Lykhopiy_2026 | irrelevant | 0 | 0 | The study focuses on the development and functional characterization of novel anti-IL-2R antibodies, not the pharmacokinetics of aldesleukin (IL-2). |
| popPK | Marachelian_2016 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of dinutuximab (ch14.18), while aldesleukin is mentioned only as a concomitant therapy without any PK parameters reported for it. |
| popPK | Mikolajewska_2021 | irrelevant | 0 | 0 | The paper is a systematic review of colchicine for COVID-19 treatment and does not contain pharmacokinetic data for aldesleukin. |
| popPK | Nash_2022 | relevant | 6 | 4 | The paper models the pharmacokinetics of IL-2 (aldesleukin) in mice and NHPs using a compartmental model, providing numeric estimates for renal clearance and volume of distribution, though these are context-dependent on the specific delivery system and not standard population PK parameters for the approved drug formulation. |
| popPK | Notaro_2025 | irrelevant | 0 | 0 | The paper describes a gene therapy study in mice using lentiviral vectors to express IL-12 and IFN-alpha for cancer treatment, and contains no pharmacokinetic data for aldesleukin. |
| PGx | Ptacin_2024 | not_relevant | 0 | 0 | The paper describes the engineering of a modified IL-2 (SAR'336) via pegylation to alter PK/PD, but does not report any genetic variant or pharmacogenomic effect. |
| PGx | Rosen_2022 | not_relevant | 0 | 0 | The paper reports preclinical data on a novel IL-2 analog and prodrug, containing no human pharmacogenomic data linking gene variants to PK/PD parameters of aldesleukin. |
| popPK | Sagie_2025 | irrelevant | 0 | 0 | The paper describes T cell receptor (TCR) targeting of the KRAS.G12V neoantigen and the effects of chemotherapy on antigen presentation, containing no pharmacokinetic data for aldesleukin. |
| PGx | Sulzmaier_2023 | not_relevant | 0 | 0 | The paper describes a novel engineered IL-2 variant (INBRX-120) and its preclinical PK/PD, but does not report the effects of human gene variants on the pharmacokinetics or pharmacodynamics of aldesleukin. |
| popPK | Yue_2008 | relevant | 7 | 2 | The paper reports an in situ two-compartment pharmacokinetic model for rhIL-2 (aldesleukin) in rats, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Zhang_2022 | irrelevant | 0 | 0 | The study focuses on the immunological mechanisms of action (immune cell expansion and gene expression) of aldesleukin, not its pharmacokinetic disposition parameters. |
| popPK | Zou_2023 | irrelevant | 0 | 0 | The paper describes a CRISPR off-target detection method (DISCOVER-Seq+) in mice and cell lines and does not report pharmacokinetic parameters for aldesleukin. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:30 UTC</sub>
