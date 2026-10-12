<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;dexrazoxane&quot;}]"></div>

# dexrazoxane

- **generic name:** dexrazoxane
- **ATC codes:** `V03AF02`
- **DrugBank:** [DB00380](https://go.drugbank.com/drugs/DB00380) · **PubChem:** [CID 71384](https://pubchem.ncbi.nlm.nih.gov/compound/71384)
- **molar mass:** 268.2691 g/mol (C11H16N4O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Dexrazoxane is a detoxifying agent used to protect against tissue damage from anthracycline chemotherapy, notably in breast cancer patients, and to treat extravasation of certain drugs. It remains authorised in the European Union, though its approved status has been accompanied by investigational uses and some withdrawn indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q524995](https://www.wikidata.org/wiki/Q524995) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexrazoxane | parent | 268.269 | C11H16N4O4 | DrugBank | [71384](https://pubchem.ncbi.nlm.nih.gov/compound/71384) | Baldwin_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:01 | 1:50 | 0/1/0 | 2/0/0 | 0/0/0 | 90,542/6,906 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.412). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Baldwin_1996_reference](drugs/drug_dexrazoxane/Dexrazoxane_Baldwin1996_reference.md) | — | 1-compartment (no model) | 8 | Baldwin JR et al., Dose-independent pharmacokinetics of th…, Biopharmaceutics & drug dis… (1996) | [10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5](https://doi.org/10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--green" title="re-read by einfracz:gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R](drugs/drug_dexrazoxane/pd_Mody_2023_R.md) | Cell viability (JIMT-1, 72 h concentration-response) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_2](drugs/drug_dexrazoxane/pd_Mody_2023_R_2.md) | Cell viability (MDA-MB-468, 72 h concentration-response) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_3](drugs/drug_dexrazoxane/pd_Mody_2023_R_3.md) | Cell viability (JIMT-1, static combination with DOX, competitive interaction model) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_4](drugs/drug_dexrazoxane/pd_Mody_2023_R_4.md) | Cell viability (MDA-MB-468, static combination with DOX, competitive interaction model) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_5](drugs/drug_dexrazoxane/pd_Mody_2023_R_5.md) | Cell viability over time (JIMT-1, single-agent and combination cellular PD model) ← dexrazoxane · delayed effect through transit (transduction) compartments | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_6](drugs/drug_dexrazoxane/pd_Mody_2023_R_6.md) | Cell viability over time (MDA-MB-468, single-agent and combination cellular PD model) ← dexrazoxane · delayed effect through transit (transduction) compartments | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span> | [Mody_2023_2_R](drugs/drug_dexrazoxane/pd_Mody_2023_2_R.md) | AC16 cell viability ← dexrazoxane · direct linear effect | — | Mody H et al., In vitro to clinical translational phar…, Scientific reports (2023) | [10.1038/s41598-023-29964-4](https://doi.org/10.1038/s41598-023-29964-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.571). The first reading is what the record holds.">cross-check: disputed</span> | [Mody_2023_2_R_2](drugs/drug_dexrazoxane/pd_Mody_2023_2_R_2.md) | AC16 cell viability (DEX cardioprotection against DOX-induced cell death) ← dexrazoxane · direct Emax (saturable) effect | — | Mody H et al., In vitro to clinical translational phar…, Scientific reports (2023) | [10.1038/s41598-023-29964-4](https://doi.org/10.1038/s41598-023-29964-4) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=dexrazoxane).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baldwin_1996.pdf` | Baldwin JR et al., Dose-independent pharmacokinetics of th…, Biopharmaceutics & drug dis… (1996) | popPK | 10 | [10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5](https://doi.org/10.1002/(SICI)1099-081X(199608)17:6<541::AID-BDD975>3.0.CO;2-5) | [8866044](https://pubmed.ncbi.nlm.nih.gov/8866044) | Full PK parameters (CL, Vss, t½, renal clearance) for dexrazoxane are reported directly in the abstract. |
| `Jirkovský_2018.pdf` | Jirkovský E et al., Pharmacokinetics of the Cardioprotectiv…, The Journal of pharmacology… (2018) | popPK | 8 | [10.1124/jpet.117.244848](https://doi.org/10.1124/jpet.117.244848) | [29273587](https://pubmed.ncbi.nlm.nih.gov/29273587) | PK of dexrazoxane and metabolite ADR-925 via NCA and population PK in rabbits, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T19:00:31.156672+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldwin_1992 | irrelevant | 2 | 2 | Dexrazoxane is only the co-administered agent; the PK parameters (CL, half-lives, AUC) reported are for doxorubicin, not dexrazoxane itself. |
| popPK | Chang_2025 | irrelevant | 1 | 1 | This is a pharmacodynamic (Top2b degradation) study in humans; the only PK mention is a literature half-life of two hours with no clearance, volume, or model parameters reported. |
| popPK | Jirkovský_2018 | relevant | 8 | 2 | PK of dexrazoxane and metabolite ADR-925 via NCA and population PK in rabbits, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |
| popPK | Mody_2023 | irrelevant | 2 | 2 | This is an in vitro PD drug-interaction study in cancer cell lines; DEX PK is only simulated from prior literature, with no dexrazoxane disposition parameters (CL, V, half-life) reported here. |
| popPK | Rodriguez_2006 | irrelevant | 0 | 0 | In vitro/ischemia contractility study; dexrazoxane only used as an antioxidant agent, no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:00 UTC</sub>
